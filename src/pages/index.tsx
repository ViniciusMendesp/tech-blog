import { Head } from "@/components/head";
import { Article } from "@/components/sections/article";
import { Form } from "@/components/sections/form";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500','700'], display: 'swap',variable: '--font-roboto'});

export default function Home() {
  return (
    <div  className={`${roboto.variable} flex min-h-screen flex-col antialiased font-roboto`}>
      <Head/>
      <Article/>
      <Form/>
    </div>
  );
}
