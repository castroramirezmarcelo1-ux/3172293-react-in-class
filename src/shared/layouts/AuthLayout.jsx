import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { 
    Input, 
    Button, 
    Select,
    Checkbox} from "@/shared";
import {getDocumentTypes} from "../../services/selectService";

export default function AuthLayout() {


    //Estado para los tipos de documento
    const[documentTypes, setDocumentTypes] = useState([])
    
    // Uso del estado useEffect
    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    },[])

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
                        />
                        <Input
                            label="Telèfono"
                            type="tel"
                            placeholder="Ingrese su nùmmero de telèfono"
                            htmlFor="user-phone"
                        />
                        <Input
                            label="Borrar tipo documento"
                            type="text"
                            placeholder="Escribe tu nombre"
                            htmlFor= "Campo de nombre"
                        />
                        <Input 
                            label="Documento"
                            type="text"
                            placeholder="Escribe tu numero de documento"
                            htmlFor= "user-document-number"
                    />
                        <Select 
                            label="Tipos de documento"
                            name="userDocumentTypes"
                            htmlFor="userDocumentTypes"
                            options={documentTypes}
                        />

                        {/* <Checkbox/> */}

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

                        <Checkbox/>

                    <Outlet />
                </main>
            </div>
        </>
    );
}