import { Info as InfoIcon } from "lucide-react";

/**
 * This component renders a small information panel.
 *
 * The component expects `message` to be an array of strings, and it
 * renders each entry as a separate paragraph. The first entry is styled
 * as an emphasized headline.
 *
 * @param {string[]} [props.message=[]] - Text lines to render in the info panel.
 * @returns {JSX.Element}
 */
export default function Info({ message = [] }) {
  return (
    message.length > 0 && (
      <div className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-400">
      <InfoIcon className="w-3.5 h-3.5 mt-0.5 text-blue-400 flex-shrink-0" />

      <div className="leading-relaxed">
        {message.map((line, index) => (
          <p
            key={index}
            className={index === 0 ? "text-gray-300 font-medium" : undefined}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
    )
  );
}
