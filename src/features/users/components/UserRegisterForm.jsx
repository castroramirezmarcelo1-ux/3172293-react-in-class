// UserRegisterForm componente para registrar un usuario

import {useState, useEffect} from "react"
import { Input, Select, Checkbox, Button } from "@shared";
import { getDocumentTypes } from "@/service/selectService";

export default function UserRegisterForm(){
    // Estado del formulario
        const [formData, setFormData] = useState({
            userName: "",
            userEmail: "",
            userPhone: "",
            userDocumentType: "",
            userDocumetnNumber: "",
            userPassword: "",
        })

    // Estado para los tipos de documento
        const[documentTypes, setDocumentTypes] = useState([])

    // Uso del estado useEffect
        useEffect(()=> {
            getDocumentTypes().then(setDocumentTypes);
        }, [])

    // Handle Generico



    // Funcion que se ejecuta cada vez que cambia el valor de los input del formulario

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const {name, value, type, checked} e.target;
        
        setFormData((prev) =>({
            // Se copian todos los valores anteriores al estado
        ...prev,
    
        // Se actualiza unicamente lo que cambio
        [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle Submit
    
    const handleSubmit = async (e) => {
      // Evita que el formulario recargue la pagina
    e.preventDefault(); 
    
    // Validamos los datos del formulario contra el esquema Zod
    // safeParse NO lanza excepcion, retorna un objeto controlado

    const result = userSchema.safeParse(formData);

    // Verificar en consola si el estado esta funcionando correctamente
    // console.log(result);

    // Si la validacion falla 
    if (!result.succes) {
        // Objeto donde almacenaremos los errores del campo
        const fieldErrors = {};

    // Recorremos cada error generado por Zod
    result.error.issues.forEach((issue) => {
        // issue.path[0] corresponde al nombre del campo
        // issue.message contiene el mensaje de error definido en el schema
        fieldErrors[issue.path[0]] = issue.message;
    });
    
    // Actualizamos el estado de errores para mostrarlos en la UI
    setErrors(fieldErrors);

    // Cortamos la ejecucion:  No se envia nada al Backend

    return;
}

    // Si la validacion pasa, limpiamos errores previos
    setErrors({});

    } 
    return(
        <div>
            <input 
            label="Nombre"
            type="text"
            placeholder="Ingrese su nombre"
            htmlFor="user-document-name"
            />
            <input 
            label="Correo"
            type="email"
            placeholder="Ingrese su correo electronico"
            htmlFor="user-email"
            />
            <input 
            label="Telefono"
            type="tel"
            placeholder="Ingrese su telefono"
            htmlFor="user-phone"
            />
            <input 
            label="Tipo de Documento"
            name="userDocumentsType"
            htmlFor="userDocumentsType"
            options={documentsTypes}
            />
            <input 
            label="Documento"
            type="text"
            placeholder="Ingrese su tipo de documento"
            htmlFor="user-document-number"
            />

            {/*{Checkbox}*/}

            <Checkbox
                id="id"
                name="isSuperUser"
                label="Es super usuario"
                checked={FormData.isSuperUser}
                onChange={handleChange}
            />
            <Checkbox
                id="isStaff"
                name="isStaff"
                label="Es staff"
                checked={FormData.isStaff}
                onChange={handleChange}
            />
            <Checkbox
                id="isActive"
                name="isActive"
                label="Esta Activo"
                checked={FormData.isActive}
                onChange={handleChange}
            />
           

            {/*{Actions}*/}

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
                
            </div>
        </div>
    )
}