<div align="center">
  <img src="https://github.com/Ismaelnelro/GreenBites/blob/main/src/assets/logo2.png" alt="Logo de GreenBites">
</div>

<div align="center">
  
#GreenBites: Tu Destino Saludable para Nueces y Productos Secos

¡Bienvenido a GreenBites! Aquí en nuestro ecommerce, nos comprometemos a ofrecerte los mejores productos secos y saludables, especialmente seleccionados para mejorar tu bienestar y alimentación. Creemos firmemente en el lema "Eres lo que comes", y por eso nos esforzamos por proporcionarte opciones nutritivas y deliciosas.
</div>


## Ejecutar el Proyecto

Para ejecutar el proyecto localmente, sigue estos pasos:

### Requisitos Previos

- Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).

### Pasos para Ejecutar

1. Clona este repositorio en tu máquina local utilizando el siguiente comando en tu terminal:

    ```bash
    git clone https://github.com/Ismaelnelro/GreenBites.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd GreenBites
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Inicia la aplicación 
     A) con json-server:

     ```bash
    npm run json-server
    ```

    B) sin json-server:(Para visualizar desde tu mobile)

    Para esto deberas de descomentar la constante PRODUCTSDATA  en el componente Products e intercarbiarlo por products que se encuentra en el map. Asi tambien deberas de hacer lo mismo en el componente topSeller, descomentar la constante topSellerData e intercambiarlo por topSellers que se encuentra en el map.


     ```bash
    npm run dev

    ```


5. Abre tu navegador web y visita `[http://localhost:3000](http://localhost:5173/)` para ver la aplicación en funcionamiento.



### Funciones ejecutando JSON-SERVER

1.  Login admin
2.  Agregar nuevo producto
3.  Editar producto
4.  Eliminar producto

¡Y eso es todo! Ahora puedes explorar y disfrutar de GreenBites en tu entorno local.
