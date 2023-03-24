# ScreenShots

Proyecto Final Programación Web Avanzada (PWA)

Alumno: Nahuel Busto Rosati
Profesor: Pastor Bernal

CREDENCIAL ADMIN:
Username: Admin
Password: admin

DESCRIPCION GENERAL:

PROBLEMATICA:
El desarrollo de este proyecto esta basado en una necesidad de la empresa en la cual trabajo actualmente.
A falta de un software CRM "Customer Relationship Management" (herramienta de gestión de relaciones con clientes) los agentes comerciales envian mails con anotaciones de sus visitas, pero no siempre son copiados o vistos por todos los que necesitan estar involucrados.

SOLUCION:
La solución es esta aplicación que por el momento deja realizar notas y asignarle tareas a otros agentes comerciales ya que, segun su rango, tienen diferentes tareas asignadas.

DESCRIPCION DE LA APLICACION MERN
La aplicación cuenta con un Login; para ingresar debe estar previamente dado de alta por el Manager o el Admin.
A modo de testing, añadi a la BD de Mongo usuarios con diferentes ROLES, (Comercial, Manager, Admin).
Al logearse con el ROL Agenete "Comercial", la aplicacion no muestra la edición total ya que solo puede ser realizada por los Admin o Manager.
En caso que un "Comercial" asigne una nota a otro operador, la nota podrá solo ser vista por la persona a la cual le fue asignada y por el Manager/Admin.
También, cada usuario puede tener el estado Activo o Inactivo.
Las funciones principales de la aplicación son:
#Crear Notas
#Eliminar Notas
#Editar Notas
#Actualizar Notas
#Crear Usuarios
#Eliminar Usuarios
#Editar Usuarios
#Actualizar Usuarios

Dejo ademas del ADMIN un perfil "Comercial" para que pueda notar la diferencia:

Username: BernalPastor
Password: Bernal
