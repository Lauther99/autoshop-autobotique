"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { numero } from "@/data/information";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSend = () => {
    if (!nombre.trim() || !mensaje.trim()) {
      alert("Completa tu nombre y mensaje");
      return;
    }

    const texto = `Mensaje de: ${nombre}\n${mensaje}`;
    const link = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
  };

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="flex flex-col overflow-hidden rounded-xl bg-[var(--bg-card)] lg:flex-row">
          <div className="relative min-h-[300px] flex-1 lg:min-h-[400px]">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4739398084785!2d-80.6427721!3d-5.187924799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1b124ad85607%3A0x8510fc4a78323419!2sAUTOSHOP%20Autoboutique!5e0!3m2!1ses!2spe!4v1768361870574!5m2!1ses!2spe"
            />
          </div>

          <div className="flex-1 p-8 md:p-10">
            <h2 className="mb-4 text-[2rem] font-extrabold uppercase">
              NECESITAS <span className="text-[var(--primary-red)]">AYUDA?</span>
            </h2>
            <p className="mb-5 text-[#888]">Envia un mensaje para responder todas tus dudas.</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="flex gap-5">
                <div className="flex-1">
                  <label className="mb-2 block text-xs font-semibold tracking-wide text-[#bbb]">NOMBRE COMPLETO</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-[#333] bg-[var(--bg-input)] p-3 text-white outline-none placeholder:text-[#777] focus:border-[var(--primary-red)]"
                    placeholder="Ej. Juan Perez"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold tracking-wide text-[#bbb]">MENSAJE</label>
                <textarea
                  className="h-[120px] w-full resize-none rounded-md border border-[#333] bg-[var(--bg-input)] p-3 text-white outline-none placeholder:text-[#777] focus:border-[var(--primary-red)]"
                  placeholder="Escribe tus dudas aqui..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--primary-red)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d10000]"
                onClick={handleSend}
              >
                <FaWhatsapp />
                ENVIAR MENSAJE
              </button>
            </form>

            <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[#333] pt-5 text-sm md:flex-row">
              <div>
                <h5 className="mb-1 text-[var(--primary-red)]">TELEFONO</h5>
                <p>+51 902 270 018</p>
              </div>
              <div>
                <h5 className="mb-1 text-[var(--primary-red)]">UBICACION</h5>
                <p>
                  Jr.Tambogrande 589 <br />
                  Urb. Santa Ana <br />
                  Piura - Peru
                </p>
              </div>
              <div>
                <h5 className="mb-1 text-[var(--primary-red)]">HORARIO</h5>
                <p>Lun-Sab: 9am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
