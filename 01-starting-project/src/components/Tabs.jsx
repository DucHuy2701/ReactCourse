export default function Tabs({children, item, Container = 'menu'}){
    //const Container = container;

    return <>
        <Container>
            {item}
        </Container>
        {children}
    </>
}