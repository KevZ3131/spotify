import Sidebar from "@/components/Sidebar";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone", //title link
  description: "Listen to Music", //title description
};

export const revalidate = 0; // not cached

export default async function RootLayout({
  children,
}: Readonly<{ //@@@
  children: React.ReactNode; //ReactNode represents anythign that can be rendered 
}>) {
  const userSongs = await getSongsByUserId();
  return (
    //set language
    <html lang="en"> 
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider> 
            </ModalProvider>
              <Sidebar songs = {userSongs}>
                {children}
              </Sidebar>
              <Player/>
        </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
