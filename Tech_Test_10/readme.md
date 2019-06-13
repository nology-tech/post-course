# What can be improved…

## /**** Widget ****/
```
.widget {
margin: 10px;
width: 100px;
height: 100px;
border: 1px solid black

& label {
height: 20px;
}
}
```
## /**** Specialised Widget ****/
```
.special-widget {
    background: grey;
    row: 1;
    
    & > .content--red {
        background: red;
    }
    
    &.special-widget__disabled {
        opacity: 0.3;
        pointer-events: none;
    }
    
    &::hover {
        border-color: blue;
    }
}
```
## /**** Widget Container ****/
```
.widgetContainer {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 100px 100px 100px;
 
    & > .special-widget {
        border: 1px solid black;
    }
}
```

There are 3 components and above is their respective (cut down pseudo) SASS files. The WidgetContainer contains some SpecialisedWidget components, and are specialising the Widget component. 

If you were reviewing this, what would you suggest?
