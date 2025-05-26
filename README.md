# 📝 App de Tareas con React

Es un proyecto más del [curso gratuito de React](https://www.youtube.com/watch?v=6Jfk8ic3KVk) en el canal de YouTube de [freeCodeCamp en Español](https://www.freecodecamp.org/espanol/). 

Se desarrolló una aplicación para gestionar tareas personales con persistencia de datos. Útil para listar tareas pendientes por realizar y tener un mejor control. Tiene una interfaz intuitiva y atractiva.


## 📄 Características
En la aplicación añadí mejoras tomando algunos de los **retos propuestos en el curso**. Las siguientes características las cuales añadí de manera personal para mejorar la aplicación son:

✔️ **Persistencia de datos:** Las tareas se guardan en localStorage, es decir, no se pierden al recargar la página.

✔️ **Contadores dinámicos:** Muestra el total de tareas y el total de tareas completadas en tiempo real.


## 🛠️ Tecnologías
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Dependencias clave  
✔️ ![uuid](https://img.shields.io/badge/uuid-v11.1.0-blue): Para generación de IDs únicos para las tareas  

✔️ ![react-icons](https://img.shields.io/badge/react__icons-v5.5.0-purple): Para insertar iconos  


## 📥 Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

1.  Clona el repositorio.
```sh
git clone https://github.com/LuisChicaizaDev/app-tareas-react.git
```

2. Instala las dependencias:  
 ```sh
npm install
```

4. Inicia la aplicación: 
 ```sh
npm start
```

La aplicación se abrirá automáticamente en el navegador configurado por defecto y se ejecutará en `localhost:3000`.


## 🎥 Demo
En el video de demostración se puede observar como:  
1. Agregar tareas ("Completar el curso de React")  
2. Marcar tareas como completadas ✔️
3. Agreagar una tarea desde otra pestaña
4. Recargar para **probar persistencia en localStorage**
5.  Eliminar una tarea 🗑️
6.  Visualizar como se **actualizan dinámicamente** el **número de tareas por completar** y las **completadas**.


https://github.com/user-attachments/assets/dd1e8195-f6a6-40bd-8408-bb4ecff4b006



## 📚 Aprendizajes

✔️ Manejo de estado en React (useState).

✔️ Componentes reutilizables (FormTarea, Tarea, InfoTareas).

✔️ Métodos de arrays (filter, map) para manipular tareas.


