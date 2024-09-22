import {
  userProfileABI,
  contractAddress,
} from "@/constant/userProfileContract";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount, useWalletClient } from "wagmi";
import { Web3 } from "web3";

const Nav = () => {
  const { isSuccess } = useWalletClient();
  const { address } = useAccount();
  const router = useRouter();

  const getUserProfile = async () => {
    try {
      if (!address) {
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log(signer);
      const contract = new ethers.Contract(
        contractAddress,
        userProfileABI,
        signer
      );

      const data = await contract.getUserProfile();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Top black nav bar */}
      <div className="bg-black text-white text-sm py-2 flex justify-center items-center gap-10">
        <div>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <p>email@domain.com</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Header section with nav */}
      <div className="bg-white py-5">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">LinkLocalAfrica</h1>
          </div>

          <nav>
            <ul className="flex gap-10 items-center text-black">
              <li className="hover:text-gray-500">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Sections</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Modules</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Get in Touch</a>
              </li>
              {/* Add some space before Login and Sign Up */}
              <div className="flex gap-[10px] ml-[40px]">
                <li>
                  <ConnectButton showBalance={false} />
                </li>
                {/* <li>{status}</li> */}
                {isSuccess && (
                  <button
                    onClick={async () => {
                      await getUserProfile();
                      // router.push("/dashboard");
                    }}
                    className="bg-stone-700 text-white px-1 rounded-lg"
                  >
                    Get Started
                  </button>
                )}

                {/* <li>
                  <a
                    href="#"
                    className="bg-black text-white px-4 py-2 hover:bg-white hover:text-black border-2 border-black transition-all"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-transparent border-2 border-black text-black px-4 py-2  hover:bg-black hover:text-white transition-all"
                  >
                    Sign Up
                  </a>
                </li> */}
              </div>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content with the hero section */}
      <div className="bg-gray-900 text-white text-center py-24">
        <h1 className="text-4xl font-bold mb-4">WIREFRAME KIT</h1>
        <p className="text-xl mb-8">
          Build your wireframe quickly & easily using 100+ professionally
          designed sections. Available exclusively for Superflyer Members.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-700">
          BECOME A MEMBER
        </button>
      </div>
    </div>
  );
};

export default Nav;
