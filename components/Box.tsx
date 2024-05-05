import { twMerge } from "tailwind-merge"; //import tw merge from tailwind css

interface BoxProps { //Prop declaration
    children: React.ReactNode; //Arguments
    className?: string;
}
const Box: React.FC<BoxProps> = ({ //Accept Box props 
    children, 
    className
})=> {
    return(
        <div //twMerge from tailwind merges multiple classes together
         className={twMerge(`
          bg-neutral-900
            rounded-lg
            h-fit
            w-full
         `,
            className
         )}>
            {children} 
        </div>
    );
}

export default Box; //export