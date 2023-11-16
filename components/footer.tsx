import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <main className="bg-gray-100 mt-10">
      <div className="bg-gray-200 mt-10 m-auto mv:p-5 min-w-min">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="text-[12px] pb-10"
        >
          <Link className="hover:text-decoration-line:underline" href="#">
            Gallery 
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            | About Glera
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            | Registration number: EDELCDA/AR&SI.63VOL1-GRCDA
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            | Developments
          </Link>
        </motion.div>

        {/* SOCIAL MEDIA LOGO */}
        <div className="border-solid border-2 rounded border-green-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            className="flex gap-5 p-5 "
          >
            <Image alt="Facebook" src="/facebook.svg" width={30} height={30} />
            <Image
              alt="Instagram"
              src="/instagram.svg"
              width={30}
              height={30}
            />
            <Image
              alt="Pinterest"
              src="/pinterest.svg"
              width={30}
              height={30}
            />
            <Image alt="Linkedin" src="/linkedin.svg" width={30} height={30} />
            {/* SOCIAL MEDIA LOGO ENDS HERE */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0 }}
            className="p-10"
          >
            <p className="text-[12px]">
              
            </p>
          </motion.div>
          <h1 className="text-center text-[12px]">©2023 Greenland Estate.</h1>
        </div>
      </div>
    </main>
  );
};

export default Footer;
