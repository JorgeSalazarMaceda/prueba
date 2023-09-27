/* Aquí irán todos los proyectos.
1- Se hace una variable con un array de objetos que contenga los trabajos
2- Vamos a tener una carpeta de imágenes (dentro de public) cuyo nombre de cada imagen será el id del trabajo para mostrarlo en la página
3- Para mostrarlo en Portafolio, tendrás que importar trabajos en Portafolio.js
4- Renderizarlo en Portafolio.js recorriendo los trabajos con un map y haciendo una función callback (es decir con un return que devuelva el dato del obj y su key identificativa)
Estás usando JSX --> Es decir, JS mezclado con HTML
5- Una vez lo muestras, puedes hacer en el nombre un link directo al trabajo.
*/

export const trabajos = [
    {
        'id':'gitJorge',
        'nombre':'GitHub de Jorge',
        'url':'https://github.com/JorgeSalazarMaceda',
        'tecnologias':'HTML, CSS, Bootstrap, PHP, MySql',
        'categorias':'Repositorio',
        'descripcion':'Lorem Ipsum'
    },
    {
        'id':'youtube',
        'nombre':'Youtube',
        'url':'https://www.youtube.com/watch?v=8ui9umU0C2g&ab_channel=manchesterorchVEVO',
        'tecnologias':'JS, React, PHP, Symfony',
        'categorias':'Videos',
        'descripcion':'Lorem Ipsum'
    },
    {
        'id':'youtube2',
        'nombre':'Youtube',
        'url':'https://www.youtube.com/watch?v=8ui9umU0C2g&ab_channel=manchesterorchVEVO',
        'tecnologias':'JS, React, PHP, Symfony',
        'categorias':'Videos',
        'descripcion':'Lorem Ipsum'
    },
    {
        'id':'youtube3',
        'nombre':'Youtube',
        'url':'https://www.youtube.com/watch?v=8ui9umU0C2g&ab_channel=manchesterorchVEVO',
        'tecnologias':'JS, React, PHP, Symfony',
        'categorias':'Videos',
        'descripcion':'Lorem Ipsum'
    },
    {
        'id':'udemy',
        'nombre':'Udemy',
        'url':'https://www.udemy.com/home/my-courses/learning/',
        'tecnologias':'Mean Stack',
        'categorias':'Cursos',
        'descripcion':'Lorem Ipsum'
    },
    {
        'id':'linkedin',
        'nombre':'LinkedIn',
        'url':'https://www.linkedin.com/in/jorge-salazar-maceda-91956a9a/',
        'tecnologias':'HTML, CSS, Bootstrap, PHP, Laravel',
        'categorias':'Red Social',
        'descripcion':'Lorem Ipsum'
    }
];