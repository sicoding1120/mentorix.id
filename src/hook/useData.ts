import menuCourses from "@/data/menuCourses.json";
import menuNavbar from "@/data/menu.json"

export const useData = () => {
    return {
        menu: {
            navbar: menuNavbar,
            courses: menuCourses
        }
    }
}