import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jannaLT = localFont({
  src: [
    {
      path: "../../public/fonts/JannaLT-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JannaLT-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-janna",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HMF Consulting Engineers",
  description: "نقدم في مكتب حسن محمد فقيه للاستشارات الهندسية مجموعة متكاملة من الخدمات الهندسية تشمل التصميم المعماري، الإشراف الهندسي، وإدارة المشاريع، مع التزام كامل بتطبيق أعلى معايير الجودة والابتكار. نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونسعى دائمًا إلى تقديم حلول مخصصة تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${jannaLT.className} antialiased bg-[#F7F6F6]`}>
        {children}
      </body>
    </html>
  );
}
