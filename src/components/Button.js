// This is a functional component called CustomButton
// It takes props as its argument
const CustomButton = (props) => {
    // The component returns a button element with the provided class name and the content from props.children
    return (
        <button type="button">{props.children}</button>
    )
}
// Export the CustomButton component to make it available for other parts of your application
export default CustomButton