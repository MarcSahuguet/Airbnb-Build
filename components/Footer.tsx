"use client";

import React, { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";
import Link from "next/link";
import Image from "next/image";
import Logo from "./navbar/Logo";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOOKUP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return (
    <ClientOnly>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-12 py-14 bg-hourrail-orange-light  border-t-8 border-hourrail-rouge-orange text-gray-100">
        
        <div className="space-y-4">
          <Logo/>
          <div className="flex flex-wrap-reverse flex-row items-center gap-2">
            
              <Link href="https://www.instagram.com/hourrail/">
                <FaInstagram className="text-3xl text-white"/>
              </Link>
              <Link href="https://www.linkedin.com/company/hourrail/">
                <FaLinkedin className="text-3xl text-white" href="https://www.linkedin.com/company/hourrail/"/>
              </Link>
           
              <Link href="https://www.tipeee.com/hourrail">
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='115'
                  height='70'
                  viewBox='19 -3 100 60'
                  fill-rule='evenodd'
                >
                  <path
                    d='M98.6 27.115c-.07.1-.045.24-.08.36-.174.59-.478 1.108-.843 1.595a13.9 13.9 0 0 1-2.174 2.27 34.61 34.61 0 0 1-6.961 4.594c-1.533.762-3.12 1.392-4.772 1.842-.86.234-1.736.392-2.634.347-.984-.05-1.884-.33-2.632-1.006-.202-.183-.377-.4-.533-.612-.1-.13-.064-.148-.24-.05-.704.394-1.43.74-2.188 1.02-.812.298-1.644.5-2.505.6-.9.094-1.763.032-2.595-.33a3.47 3.47 0 0 1-1.527-1.283c-.104-.155-.09-.138-.238-.054-.86.488-1.748.912-2.682 1.24-.746.262-1.513.432-2.303.432-1.6.001-2.806-.68-3.544-2.128l-.07-.127c-.003-.005-.01-.008-.02-.015l-.83.38c-.234.105-.48.146-.732.093-.5-.106-.804-.6-.695-1.138.063-.306.225-.526.524-.65l1.15-.537c.088-.045.118-.1.1-.195l-.03-.603c-.012-1.364.21-2.697.543-4.015.307-1.216.72-2.394 1.31-3.505.67-1.263 1.53-2.367 2.686-3.225.616-.457 1.288-.793 2.042-.95.538-.113 1.075-.134 1.608.02.646.187 1.103.6 1.4 1.195.317.64.416 1.318.342 2.027-.1.97-.455 1.86-.9 2.713-.837 1.605-1.863 3.08-3.11 4.394-1.053 1.1-2.222 2.08-3.507 2.908l-.105.068c-.057.033-.07.072-.042.138.304.76.805 1.195 1.683 1.238.643.032 1.256-.122 1.853-.338.943-.34 1.832-.8 2.702-1.295.1-.063.137-.134.122-.25-.064-.49-.065-.986-.032-1.478a14.77 14.77 0 0 1 .488-2.892c.444-1.63 1.077-3.184 1.947-4.635.63-1.052 1.413-1.98 2.37-2.75.734-.59 1.564-.97 2.494-1.137 1.357-.242 2.547.615 2.914 1.78.242.767.21 1.535.02 2.303-.145.583-.4 1.125-.662 1.662-.782 1.597-1.805 3.03-2.974 4.365a22.79 22.79 0 0 1-4.129 3.683l-.086.06c-.063.037-.06.08-.025.138.133.217.3.4.523.528.332.192.692.272 1.075.285.746.025 1.465-.116 2.176-.32.995-.286 1.9-.75 2.806-1.26.092-.052.128-.113.11-.218-.06-.323-.062-.65-.062-.976a10.02 10.02 0 0 1 .07-1.226c.146-1.204.416-2.38.82-3.524.5-1.42 1.118-2.786 1.977-4.03.715-1.036 1.574-1.925 2.67-2.564.532-.3 1.09-.55 1.7-.656.732-.126 1.416-.022 2 .47a2.92 2.92 0 0 1 .955 1.556c.177.696.135 1.392-.015 2.085-.197.912-.57 1.755-1.023 2.565-.7 1.25-1.56 2.383-2.52 3.443-1.26 1.39-2.637 2.65-4.168 3.738-.034.024-.07.045-.092.098.21.36.53.587.927.717.372.122.755.11 1.136.094.84-.03 1.646-.25 2.445-.484 1.09-.32 2.13-.76 3.15-1.253a35.37 35.37 0 0 0 5.868-3.57c.976-.732 1.884-1.54 2.694-2.453a5.5 5.5 0 0 0 .829-1.196c.084-.17.137-.347.156-.537.044-.434.376-.773.813-.824.2-.023.4-.02.594.063a.83.83 0 0 1 .473.519v.668zM79.07 33.242c.093-.015.132-.067.18-.104.927-.725 1.79-1.518 2.607-2.365 1.163-1.207 2.18-2.522 2.966-4.007.376-.71.66-1.457.696-2.272.013-.3-.01-.583-.15-.85-.114-.217-.3-.323-.536-.334-.3-.014-.588.09-.86.218-.585.28-1.07.694-1.522 1.15-.788.795-1.353 1.74-1.84 2.738-.63 1.292-1.076 2.647-1.36 4.056-.116.58-.187 1.163-.184 1.77zm-9.007-.07c.074-.006.102-.04.134-.064a21.61 21.61 0 0 0 2.315-2.036c1.3-1.322 2.396-2.794 3.28-4.423.255-.47.502-.945.667-1.457.127-.394.2-.795.153-1.2-.058-.514-.377-.764-.89-.7-.027.003-.054.012-.08.017-.34.064-.65.198-.944.373-.82.49-1.466 1.166-2.024 1.928a11.66 11.66 0 0 0-1.154 1.978c-.625 1.34-1.062 2.744-1.327 4.2a8.51 8.51 0 0 0-.13 1.394zm-8.556-.488c.066.003.092-.02.12-.04.885-.62 1.692-1.332 2.44-2.113C65.072 29.48 65.9 28.3 66.62 27.04c.4-.702.735-1.435.907-2.23.066-.307.092-.618.025-.93-.095-.442-.333-.632-.78-.604-.333.02-.635.15-.922.306-.92.498-1.62 1.237-2.216 2.078-.422.598-.735 1.26-1.006 1.94-.462 1.16-.8 2.357-1 3.588a10.69 10.69 0 0 0-.132 1.5z'
                    fill='white'
                  />
                  <path
                    d='M21.398 21.607c.013-.002.034 0 .04-.008.12-.204.31-.226.522-.22h1.022c.147-.001.158-.006.15-.155l-.02-1.584-.002-.96a.77.77 0 0 1 .624-.8l3.58-1.107a1.95 1.95 0 0 1 .303-.074c.383-.066.657.137.702.524.012.103.005.208.005.312v3.65c0 .19.002.193.198.193h2.504c.063 0 .126-.003.187.005.163.02.276.14.296.302.005.04.003.083.003.125v3.568c0 .303-.128.43-.43.433h-.125c-.793 0-1.586-.001-2.378 0-.29 0-.253-.028-.253.258v5.946c0 .14-.001.277.03.415.08.367.3.576.67.65.344.07.678.01 1.01-.064a5.1 5.1 0 0 0 .928-.306l.076-.034c.292-.113.46-.006.472.308l.002.605v2.817c0 .4-.166.653-.54.798-.622.24-1.256.443-1.905.6-.782.19-1.572.29-2.375.236-.937-.064-1.78-.362-2.447-1.057-.51-.532-.8-1.18-.964-1.89-.094-.407-.134-.82-.133-1.24l-.005-7.844c-.001-.2-.001-.2-.208-.2-.334-.001-.668-.007-1 .003-.202.006-.372-.033-.484-.217-.01-.015-.035-.02-.053-.03v-3.965z'
                    fill='white'
                  />
                  <path
                    d='M37.757 15.43c.367.046.72.136 1.05.3.966.508 1.526 1.576 1.425 2.665-.126 1.356-1.313 2.524-2.845 2.442-1.5-.08-2.494-1.292-2.562-2.546-.073-1.325.81-2.512 2.092-2.81.085-.02.182.005.256-.062h.584z'
                    fill='white'
                  />
                  <path
                    d='M48.966 21.865l.944-.303c1.77-.4 3.44-.15 4.986.8 1.538.945 2.57 2.3 3.227 3.975.346.88.54 1.793.6 2.735.117 1.813-.23 3.527-1.114 5.12-.775 1.397-1.852 2.492-3.297 3.204-1.073.53-2.2.733-3.397.644-.598-.045-1.18-.18-1.742-.392-.063-.024-.122-.07-.195-.054-.044.032-.03.077-.03.115v2.253c0 .17.002.172.17.172l.918.001a.38.38 0 0 1 .441.412c.004.048.001.097.001.146V44c0 .097.001.194-.027.3-.047.162-.164.258-.33.268-.042.003-.083.001-.125.001h-7.552c-.063 0-.126.005-.187-.006-.146-.027-.264-.165-.283-.324-.006-.048-.003-.097-.003-.146V40.6c0-.083-.008-.167.03-.246a.37.37 0 0 1 .364-.228h.98c.173-.001.173-.002.176-.166V26.076c0-.3.042-.276-.276-.278-.278-.002-.556.002-.834-.001-.312-.004-.438-.134-.44-.45V21.82c0-.326.13-.463.45-.464h6.07c.318 0 .416.107.472.508zm5.194 7.84c-.002-.716-.1-1.364-.34-1.98-.204-.547-.5-1.04-.922-1.445-.357-.334-.773-.546-1.264-.57-.455-.022-.858.14-1.218.412-.437.33-.75.764-.97 1.26-.64 1.447-.668 2.92-.13 4.4a3.47 3.47 0 0 0 .93 1.414c.752.68 1.7.7 2.502.078.36-.287.624-.65.834-1.055.408-.788.573-1.632.576-2.513zM34.816 27.37c-.077-.03-.14.006-.206.025l-.8.236a.33.33 0 0 1-.441-.282c-.01-.068-.01-.138-.01-.208V23.9l.007-.187c.025-.283.126-.4.398-.493l5.923-1.777c.053-.016.106-.035.16-.042a.33.33 0 0 1 .384.294c.01.075.005.153.005.23l.001 11.454c0 .3-.026.257.252.26h.876c.26.003.398.14.398.403v3.63c0 .278-.135.396-.44.396H34.73c-.34 0-.682.002-1.022-.001-.275-.002-.408-.134-.408-.4v-3.6c0-.27.142-.407.415-.4l.876-.001c.266-.001.238.028.24-.23v-5.8c0-.075.01-.152-.014-.224z'
                    fill='white'
                  />
                </svg>
              </Link>
            </div>
            <p className="font-barlow "> © 2023 HOURRAIL!</p>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold">A PROPOS</h5>
          <p><Link href="/mentions">Mentions légales</Link></p>
          <p>Nouvelles fonctionalités</p>
          <p>Investisseurs</p>
          <p>(On en a pas)</p>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Reporter un bug</p>
          <p>Comment ça fonctionne</p>
          <p>Conseils pratiques</p>
        </div>

          <div className="space-y-4">
            <h5 className="font-bold">COMMUNAUTE</h5>
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSefj9Xx7QiOMkeghtajWdYFexWH6E1hSCsIpG4K-ms2vNnsUA/viewform" target="_blank">Devenir bénévole</a></p>
            <p><a href="https://www.tipeee.com/hourrail" target="_blank">Faire un don</a></p>
            <p><a href="mailto:media@hourrail.voyage?subject=Contribution Vidéo">Contribution video</a></p>
          </div>

      </div>
    </ClientOnly>
  );
}

export default Footer;
