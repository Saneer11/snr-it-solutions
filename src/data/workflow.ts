import {
  ClipboardList,
  SearchCheck,
  Laptop,
  CheckCircle2,
} from "lucide-react";

export const workflow = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Submit Your Request",
    description:
      "Tell us about your IT issue through our online support form.",
  },
  {
    step: "02",
    icon: SearchCheck,
    title: "Issue Assessment",
    description:
      "We review your request, identify the problem and determine the best solution.",
  },
  {
    step: "03",
    icon: Laptop,
    title: "Remote Support",
    description:
      "Our technician securely connects to your device and resolves the issue.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Problem Solved",
    description:
      "Your system is tested, confirmed working and you're ready to continue.",
  },
];