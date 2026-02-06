import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "ghsbftynenpfyoeaxsiw.supabase.co",
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "caraudioexpress.pe",
      "www.apoloaudio.com.pe",
      "autoradio.pe",
      "media.falabella.com",
      "s.alicdn.com",
      "resources-sami4.s3.us-west-1.amazonaws.com",
      "http2.mlstatic.com",
      "autopartes.safari.com.pe",
      "oechsle.vteximg.com.br",
      "i.ebayimg.com",
      "www.toyotaperu.com.pe",
      "ae01.alicdn.com",
      "denniscarsac.com",
      "apr.pe",
      "pvljogumgjnzfsbjpyke.supabase.co",
      "cdnx.jumpseller.com",
      "image.made-in-china.com",
      "tecgo.com.pe",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
