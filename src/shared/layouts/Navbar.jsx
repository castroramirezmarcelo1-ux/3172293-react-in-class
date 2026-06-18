import { useState } from "react";
import { User } from "lucide-react";
import {
  IconButton,
  SearchField,
} from "@/shared";
import  logo  from "@/assets/images/1-logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/services/logoutService";


export default function Navbar(){


  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/auth");
  };


  // Componente de búsqueda 😂😂😂
  const [search, setSearch] = useState("");


  const handleSearch = (value) => {
    console.log("Buscar:", value);
  };


  const handleClear = () => {
    console.log("Campo limpiado");
  };


  // Estado que controla el Switch
   const [isActive, setIsActive] = useState(true);


  //  Manejador del estado del switch 😂...
  const handleStatusChange = (value) => {
    setIsActive(value);


    // Aquí generalmente va el llamado a una API
    console.log("Nuevo estado", value)
  }


    return (
      <nav className="w-full bg-transparent border-b-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo de marca */}
            <div className=" hidden sm:block items-center">
              <Link to={"/dashboard/home"} className="text-h1 font-heading">
                <img src={logo} alt="logo" className="h-12" />
              </Link>
            </div>


            {/* Switch */}
            {/* inline-flex :Ocupa solo su contenido, no todo el ancho. */}
            <Switch
              checked={isActive}
              onChange={handleStatusChange}
              size="md"
              className="hidden sm:inline-flex"
            />


            {/* Links de navegación */}
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link to={"/auth"} className="hover:text-primary transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard"}
                  className="hover:text-primary transition"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link to={"/inicio"} className="hover:text-primary transition">
                  Multimedia
                </Link>
              </li>
              <li>
                <Link to={"/inicio"} className="hover:text-primary transition">
                  Contacto
                </Link>
              </li>
            </ul>


            <SearchField
              value={search}
              onChange={setSearch}
              onSubmit={handleSearch}
              onClear={handleClear}
              placeholder="Buscar productos..."
              size="md"
              variant="outlined"
              className="w-76"
            />


            {/* Ícono de usuario */}
            {/* ======= Dropdown ======= */}
            <div className="p-10">
              <Dropdown>
                <DropdownTrigger>
                  <IconButton ariaLabel="Menú de usuario">
                    <User />
                  </IconButton>
                </DropdownTrigger>


                <DropdownContent className="right-0 w-48">
                  <DropdownItem onClick={handleLogout}>
                    Cerrar sesión
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/dashboard" className="block w-full">
                      Crear Usuario
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/dashboard/userList" className="block w-full">
                      Gestión usuarios
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/dashboard/access" className="block w-full">
                      Admin
                    </Link>
                  </DropdownItem>
                </DropdownContent>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    );
}
	
