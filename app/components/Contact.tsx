"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { numero } from "../../general_information/information";


export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSend = () => {
    if (!nombre.trim() || !mensaje.trim()) {
      alert("Completa tu nombre y mensaje");
      return;
    }

    const texto = `📩 Mensaje de: ${nombre}\n${mensaje}`;
    const textoCodificado = encodeURIComponent(texto);

    const link = `https://wa.me/${numero}?text=${textoCodificado}`;

    window.open(link, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-container">
          <div className="map-wrapper">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4739398084785!2d-80.6427721!3d-5.187924799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1b124ad85607%3A0x8510fc4a78323419!2sAUTOSHOP%20Autoboutique!5e0!3m2!1ses!2spe!4v1768361870574!5m2!1ses!2spe"
            ></iframe>
          </div>

          <div className="form-wrapper">
            <h2 className="section-title">
              ¿NECESITAS <span className="text-red">AYUDA?</span>
            </h2>
            <p style={{ color: "#888", marginBottom: "20px" }}>
              Envíanos un mensaje para responder todas tus dudas.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label>NOMBRE COMPLETO</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ej. Juan Pérez"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>MENSAJE</label>
                <textarea
                  className="form-textarea"
                  placeholder="Escribe tus dudas aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={handleSend}
              >
                <FaWhatsapp style={{ marginRight: 8 }} />
                ENVIAR MENSAJE
              </button>
            </form>

            <div className="contact-info">
              <div className="info-item">
                <h5>TELÉFONO</h5>
                <p>+51 902 270 018</p>
              </div>
              <div className="info-item">
                <h5>UBICACIÓN</h5>
                <p>
                  Jr.Tambogrande 589 <br />
                  Urb. Santa Ana <br />
                  Piura - Perú
                </p>
              </div>
              <div className="info-item">
                <h5>HORARIO</h5>
                <p>Lun-Sáb: 9am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
