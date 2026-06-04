import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { Input, Button } from "@/shared";
import DeleteCounter2 from "../components/DeleteCounter2";
import EfectoDemo from "../components/EffectDemo";


export default function AuthLayout() {
    return (
        <>
            <div 
                className="min-h-screen w-full"
                style={{
                    backgroundImage: `url(${authBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <main className="mx-auto">
                        <Input
                            label="Nombre"
                            type="text"
                            placeholder="Ingrese su nombre"
                            htmlFor="user-name"
                            size="md"
                        />
                        <Input
                            label="Correo"
                            type="email"
                            placeholder="Ingrese su correo"
                            htmlFor="user-email"
                            size="md"
                        />
                        <Input
                            label="Telèfono"
                            type="tel"
                            placeholder="Ingrese su nùmmero de telèfono"
                            htmlFor="user-phone"
                            size="md"
                        />
                        <Input
                            label="Tipo de documento"
                            type="text"
                            placeholder="Ingrese su nombre"
                            htmlFor="name"
                            size="md"
                        />
                        <Input
                            label="Documento"
                            type="text"
                            placeholder="Ingrese su nùmero de documento"
                            htmlFor="user-document-number"
                            size="md"
                        />

                        {/* Actions */}
                        <div>
                            <Button
                                variant="secondary"
                                size="sm"
                                type="button"
                                onClick={() => console.log("Se oprimio cancelar")}
                                >
                                    Cancelar
                            </Button>
                            <Button
                                variant="primary"
                                size="md"
                                type="submit"
                                onClick={() => console.log("Se orpmio el submit")}
                            >
                                Guardar
                            </Button>
                        </div>{/*Actions*/}

                        { /*Implementacion del estado useState*/}
                        <div className="mt-10"> 
                            <h1>Ejemplo useState</h1>
                        <DeleteCounter2/>
                        </div>

                        <EfectoDemo/>
                        

                        <h1>Hola que tal</h1>
                    <Outlet />
                </main>
            </div>
        </>
    );
}