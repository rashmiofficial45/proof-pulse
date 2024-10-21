import Link from "next/link";
import { X, Globe, Tag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
type HomeSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function HomeSidebar({ isOpen, onClose }: HomeSidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } border-r bg-white dark:bg-gray-800 shadow-lg`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-100 dark:bg-gray-700">
          <Link className="flex items-center" href="#">
            <Globe className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg">ProofTrack</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden hover:bg-slate-300"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Tag className="h-5 w-5 mr-2" />
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Tag className="h-5 w-5 mr-2" />
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Info className="h-5 w-5 mr-2" />
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
