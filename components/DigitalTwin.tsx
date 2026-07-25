import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TWIN_URL = "https://leckan-twin.hf.space";
const VOICE_AGENT_TEL = "+17476009691";
const VOICE_AGENT_DISPLAY = "+1 (747) 600 9691";

const DigitalTwin = () => {
  return (
    <div className="py-20 w-full" id="digital-twin">
      <h1 className="heading">
        Talk to our Founder's <span className="text-purple">AI digital twin</span>
      </h1>

      <p className="text-center text-white-200 md:text-base text-sm max-w-2xl mx-auto mt-5">
        Ask it about his background, experience, or how ThinkZone works. Powered
        by a Gradio Space on Hugging Face — the first reply may take a moment
        while the Space wakes up.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={`tel:${VOICE_AGENT_TEL}`}
          aria-label={`Call Think Zone Assistant, our AI voice agent, at ${VOICE_AGENT_DISPLAY}`}
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/[0.1] bg-[#04071D] px-6 py-3 text-center transition-colors hover:border-purple/50"
        >
          <FaPhoneAlt className="text-purple shrink-0" aria-hidden="true" />
          <span className="text-white-200 md:text-base text-sm">
            Prefer to talk? Call{" "}
            <span className="text-white">Think Zone Assistant</span>, our AI
            voice agent, at{" "}
            <span className="text-purple font-semibold whitespace-nowrap">
              {VOICE_AGENT_DISPLAY}
            </span>
          </span>
        </a>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071D] shadow-xs">
          <iframe
            src={TWIN_URL}
            title="AI Digital Twin — Ahmed Mustapha"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="clipboard-write; microphone"
            className="block w-full h-[70vh] min-h-[520px] max-h-[760px] border-0"
          />
        </div>
      </div>

      <p className="text-center text-white-200 text-xs mt-5">
        Trouble loading?{" "}
        <a
          href={TWIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple underline underline-offset-4"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
};

export default DigitalTwin;
