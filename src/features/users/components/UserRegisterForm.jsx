// UserRegisterForm componente para registrar un usuario

import { useState, useEffect } from "react"
import { Input, Select, Checkbox, Button } from "@/shared";
import { getDocumentTypes } from "@/services/selectService";
// import { useNavigate } from "react-router-dom"
import { userSchema } from "../schemas/userSchema";
import { User, PencilLine } from "lucide-react"

export default function UserRegisterForm(){
    // Estado del formulario

        // const navigate = useNavigate();

    // Estado del error

        const [errors, setErrors] = useState({}); 


        const [formData, setFormData] = useState({
            userName: "",
            userEmail: "",
            userPhone: "",
            userDocumentType: "",
            userDocumentNumber: "",
            userPassword: "",
            userImage: [],

            isStaff: false,
            isActive: true,
            isSuperUser: false,

        });

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
        const { name, value, type, checked } = e.target;
        
        setFormData((prev) =>({
            // Se copian todos los valores anteriores al estado
            ...prev,
    
        // Se actualiza unicamente lo que cambio
            [name]: type === "checkbox" ? checked : value,
        }));
    };

//  const handleNameChange = (e) => {
//     const value = e.target.value.trim();

//     if (value === ""){
//         console.log("El nombre no puede estar vacio")
//     }
            
// };
//     // Handle Submit
    
    const handleSubmit = async (e) => {
//       // Evita que el formulario recargue la pagina
        e.preventDefault(); 
    
//     // Validamos los datos del formulario contra el esquema Zod
//     // safeParse NO lanza excepcion, retorna un objeto controlado

        const result = userSchema.safeParse(formData);

//     // Verificar en consola si el estado esta funcionando correctamente
    // console.log(result);

//     // Si la validacion falla 
        if (!result.success) {
//         // Objeto donde almacenaremos los errores del campo
            const fieldErrors = {};

//     // Recorremos cada error generado por Zod
            result.error.issues.forEach((issue) => {
//         // issue.path[0] corresponde al nombre del campo
//         // issue.message contiene el mensaje de error definido en el schema
                fieldErrors[issue.path[0]] = issue.message;
    });
    
//     // Actualizamos el estado de errores para mostrarlos en la UI
    setErrors(fieldErrors);

    return;
}
    
//     // Si la validacion pasa, limpiamos errores previos
    setErrors({});

//     // Activamos estado de envio (util para deshabilitar el boton)
//     setIsSubmitting(true);
    
    try{
//         // Llamamos al servicio frontend que consume la API
//         // result.data contiene los datos ya validados por Zod
           // const response = await createServerModuleRunner(result.data);

//         // Log informativo para desarrollo
        // console.log("Usuario creado:", response);

//         // Feedback basico al usuario
        alert ("Usuario creado correctamente");

//         // Navegamos a la vista anterior
//         // navigate(-1) equivale a "volver atras"
        // navigate(-1);

    } catch (error){
//         // Capturamos errores de red o errores lanzados por el service
        console.error("Error:", error.message);

//         // Mostramos el mensaje de error al usuario
        alert(error.message);
       
    } finally {
//         // Pase lo que pase, desactivamos el estado de envio
        // setIsSubmitting(false);
    }
};

    // Cortamos la ejecucion:  No se envia nada al Backend
    // const [ documentTypes, setDocumentTypes] = useState([])
    
    
    
    //     useEffect(()=>{
    //         getDocumentTypes().then(setDocumentTypes);
    //     },[])


return (
        <div className="grid items-center justify-center">
            <h1 className="mx-auto my-12 text-title font-heading font-bold">Registro de usuarios</h1>

            <form 
                action=""
                onSubmit={handleSubmit}
                >

                <Input 
                label="Nombre"
                name="userName"
                type="text"
                value = {formData.userName}
                placeholder="Ingrese su nombre"
                htmlFor="user-document-name"
                onChange = {handleChange}
                error = {errors.userName}

                />
                <Input 
                label="Correo"
                name="userEmail"
                type="email"
                value = {formData.userEmail}
                placeholder="Ingrese su Correo"
                htmlFor="user-email"
                onChange = {handleChange}
                error = {errors.userEmail}
                />
                <Input 
                label="Telefono"
                name="userPhone"
                type="tel"
                value = {formData.userPhone}
                placeholder="Ingrese su Telefonno"
                htmlFor="user-phone"
                onChange = {handleChange}
                error = {errors.userPhone}
                />
                <Select 
                label="Tipo de Documento"
                name="userDocumentType"
                value = {formData.userDocumentType}
                htmlFor="userDocumentType"
                options={documentTypes}
                error = {errors.userDocumentType}
                onChange={handleChange}
                />
                <Input 
                label="Documento"
                name="userDocumentNumber"
                type="password"
                value = {formData.userDocumentNumber}
                placeholder="Ingrese su Documento"
                htmlFor="user-document-number"
                onChange = {handleChange}
                error = {errors.userDocumentNumber}
                />
                <Input 
                label="Contraseña"
                name="userPassword"
                type="password"
                value = {formData.userPassword}
                placeholder="Ingrese su Contraseña"
                htmlFor="user-password"
                onChange = {handleChange}
                error = {errors.userPassword}
                />

            {/*{Checkbox}*/}
            <div className="grid gap-4 my-8">
                <Checkbox
                    id="id"
                    name="isSuperUser"
                    label="Es super usuario"
                    checked={formData.isSuperUser}
                    onChange={handleChange}
                />
                <Checkbox
                    id="isStaff"
                    name="isStaff"
                    label="Es staff"
                    checked={formData.isStaff}
                    onChange={handleChange}
                />
                <Checkbox
                    id="isActive"
                    name="isActive"
                    label="Esta Activo"
                    checked={formData.isActive}
                    onChange={handleChange}
                />
            </div>
                
                {/*{Actions}*/}
                
            <div className="flex gap-6 items-center">
            
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
                <User/>
                <PencilLine/>
            </div>

            {/** Icono */}

            </form>
        </div>
        
    );
}