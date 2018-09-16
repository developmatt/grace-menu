# Grace Menu
A elegant and mobile support menu. The name is a tribute to Grace Hopper.
![Grace menu in action](https://image.ibb.co/bSyFez/grace_menu.gif)

## Implementing Grace Menu

 - Add the Grace Menu style: `@import 'node_modules/grace-menu/assets/css/bundle';`

 - Add Grace Menu script: `require('grace-menu')`

 - Create the parent-element in wich will be the Grace Menu (i.e `.grace-menu-parent` - this name is optional). Stylize this element the way you want.
 ![Creating the parent element](https://image.ibb.co/gQwOXK/parent_element.png)
 

 - Inside this parent-element, create a div with class `grace-menu-container`
 ![Creating the Grace Menu element](https://image.ibb.co/kmtLCK/grace_menu_component.png)

 - Now, you can create the `.grace-menu-body` component. Here will be the code to be inserted in Grace Menu. This element must be sibling of `.grace-menu-container` and everything inside this element can be stylized. Use your creativity!
![Creating components that will be shown inside the menu](https://image.ibb.co/n6d3XK/create_body_menu_element.png)
 - The last step is create the button that open and close the Grace Menu. In this button, put the class `grace-menu-toggler`. This button will toggle the menu visibility
 ![enter image description here](https://image.ibb.co/e8dyzz/create_button.png)

## Options:
If you want specify a button just to open or just to close menu, use the classes `grace-menu-opener` and `grace-menu-closer`

You're welcome to make changes to project (animations and styling), but is necessary include the files above so satisfatory operation.

## Functional tips
Here comes a list of elements you will need to make the Grace Menu works

- `.grace-menu-container`
    The container where grace-menu will be inserted

 - `.grace-menu-body`
    The element who will be inserted inside the grace menu.

 - `.grace-menu-toggler`
    The element who will toggle the grace menu's exibition

 - `.grace-menu-opener`
    The element who will open the grace menu

 - `.grace-menu-closer`
    The element who will close the grace menu

 - `.grace-menu-body`
    This element will be putted inside the grace menu. Use this element to insert title, menu items, text or whatever you want (tags html).

## Styling tips
In the grace menu you can stilyze two core elements: `.grace-menu` and `.grace-menu-background`. The other elements (those who are in the .grace-menu-body) you can style in the way you want based in class you selected in your html