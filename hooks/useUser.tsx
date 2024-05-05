import { Subscription, UserDetails } from "@/types"; //import data from supabase
import { User } from "@supabase/auth-helpers-nextjs";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";

//check user

type UserContextType = { //global
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};

export const UserContext = createContext <UserContextType | undefined>( //context is global data 
    undefined
);

export interface Props{
    [propName: string]: any;
};


export const MyUserContextProvider = (props: Props) => { //Props are properties
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext(); //useSession is a boolean that is set if the user is signed in
    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription |null>(null);

    const getUserDetails = () => supabase.from(`users`).select(`*`).single(); //get user details
    const getSubscription = () =>
        supabase
        .from(`subscriptions`)
        .select('*, prices(*, products(*))')//* represents everything
        .in('status', ['trialing', 'active']) //subscription type
        .single();//one row

    useEffect(() => { //synchronizes a component with an external system | cleans and set ups
        if (user && !isLoadingData && !userDetails && !subscription){ //if user is logged in but is not authorized
            setIsLoadingData(true); 

            Promise.allSettled([getUserDetails(), getSubscription() ]). then( //run the two functions and set the results to the 2 variables 
                (results) => {
                    const userDetailsPromise = results [0];
                    const subscriptionPromise = results [1];

                    if (userDetailsPromise.status === "fulfilled"){
                        setUserDetails(userDetailsPromise.value.data as UserDetails)
                    }

                    if (subscriptionPromise.status === "fulfilled"){
                        setSubscription(subscriptionPromise.value.data as Subscription)
                    }

                    setIsLoadingData(false);
                }
            );
        } else if (!user && !isLoadingUser && !isLoadingData){
            setUserDetails(null);
            setSubscription(null);
        }
    }, [user, isLoadingUser]);

    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscription
    };
        
        return <UserContext.Provider value = {value} {...props}/>
    }

export const useUser =() => {
    const context = useContext (UserContext); //set context to the global UserOCntext
    if (context === undefined){
        throw new Error("useUser must be used with a MyUsercontextProvider")
    }

    return context;
};