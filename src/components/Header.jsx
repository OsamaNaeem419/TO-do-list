import { Button } from "./Button"

export const Header = ({onAdd}) => {
    return (
        <header className="header">
            <h1>ToDo list</h1>
            <Button color ='Blue' text = 'Add' onClick= {onAdd} />
        </header>

    )
}


