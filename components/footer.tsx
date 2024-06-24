import Image from "next/image";
import logo from "../assets/images/logo.svg";
import {
  PhoneOutlined,
  MailOutlined,
  BankOutlined,
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function footer() {
  return (
    <footer className="w-full h-[50px]">
      <div className="bg-[#FBD029] w-full h-[20px]"></div>
      <div className="bg-[#1F1D14] flex flex-col w-full py-10 md:flex-row items-start gap-5 md:items-center md:justify-between px-[85px] md:px-[110px] ">
        <div className="flex max-w-[70px] text-[20px] font-semibold gap-[11px] text-white">
          <Image src={logo} alt="" width={50} height={50} />
          <h1>Sport Market</h1>
        </div>
        <ul className="mb-9">
          <li className="text-white font-bold text-[18px] mb-4">Контакты</li>
          <li className="text-white flex items-center gap-2">
            {" "}
            <PhoneOutlined />
            +998 (90) 565-85-85
          </li>
          <li className="text-white flex items-center gap-2">
            {" "}
            <MailOutlined />
            support@figma.com
          </li>
        </ul>
        <p className="text-white flex items-start gap-2">
          {" "}
          <BankOutlined />
          Tashkent Sh. Chilonzor 9 kvartal <br /> 12 uy
        </p>

        <div>
          <p className="text-white font-semibold mb-3 flex flex-col items-center md:flex-row ">Подписатся</p>
          <input
            type="text"
            placeholder="support@figma.com"
            className="block p-3 rounded-md w-[235px]"
          />
          <button className="rounded-md w-[235px] bg-yellow-400 mt-3 p-3">
            Отправить
          </button>
          <div className="text-white text-[29px] flex items-center gap-4 mt-7">
            <InstagramOutlined />
            <FacebookOutlined />
            <WhatsAppOutlined />
          </div>
        </div>
      </div>
      <div className="bg-[#1F1D14] w-full py-2 border-t-2 border-black flex flex-col md:flex-row items-center justify-between px-[110px]">
        <p className="text-[#7B7E86] text-[12px]">© 2022 All Rights Reserved</p>
        <ul className="flex items-center flex-col md:flex-row gap-5 text-[#7B7E86] text-[12px]">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sales and Refunds</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
    </footer>
  );
}
