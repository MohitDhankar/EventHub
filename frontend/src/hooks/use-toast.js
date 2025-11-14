import { toast as sonnerToast } from "sonner";

export const useToast = () => {
  const toast = ({ title, description, type = "default" }) => {
    sonnerToast[type](`${title} — ${description}`);
  };

  return { toast };
};
