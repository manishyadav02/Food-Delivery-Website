import { UtensilsCrossed, Pizza, Hamburger, CookingPot, Soup } from "lucide-react";
import { TbCategory } from "react-icons/tb";
import { GiBowlOfRice } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
export const categories = [
  {
    id: 1,
    name: "All",
    icon: <TbCategory className="w-15 h-15 text-green-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <UtensilsCrossed className="w-15 h-15 text-green-600" />,
  },
  {
    id: 3,
    name: "soups",
    icon:<Soup className="w-15 h-15 text-green-600" /> ,
  },
  {
    id: 4,
    name: "pasta",
    icon: <GiBowlOfRice className="w-15 h-15 text-green-600" />,
  },
  {
    id: 5,
    name: "main_course",
    icon: <MdOutlineFoodBank className="w-15 h-15 text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <Pizza className="w-15 h-15 text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <Hamburger className="w-15 h-15 text-green-600" />,
  },
];
