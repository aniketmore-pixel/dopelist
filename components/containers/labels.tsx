import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function LabelsList() {
  // Fetch all labels using the Convex query
  const labels = useQuery(api.labels.getLabels);

  return (
    <div className="p-4">
      
      {labels ? (
        <ul>
          {labels.map((label) => (
            <li key={label._id} className="py-2">
              {label.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading labels...</p>
      )}
    </div>
  );
}
