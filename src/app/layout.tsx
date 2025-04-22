import "./globals.css";
import { RightBar } from "@/components/RightBar";
import { LeftBar } from "@/components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-md mx-auto flex justify-between">
          <div className="bg-red-200 h-screen xxl:px-8 xsm:px-4 px-2">
            <LeftBar />
          </div>
          <div className="bg-blue-200 h-screen flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </div>
          <div className="bg-green-200 h-screen flex-1 lg:flex hidden md:ml-8 ml-4">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
