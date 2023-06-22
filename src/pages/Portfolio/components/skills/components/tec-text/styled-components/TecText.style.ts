import styled from 'styled-components';

export const TecTextContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between; 
background-image: linear-gradient( white, var(--main-color));
position: relative;

.first{
    padding: 20px;

p{
    text-align: justify;
}
}



.responsive{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: 786px) {
flex-direction: row;
}
ul{
    width: 100%;
    
}

li{
    text-decoration: none;
    list-style: none;
    text-shadow: 1px 1px 2px black, 0 0 25px white, 0 0 5px white;
    
}

.listcel{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    background-color: rgb(242, 242, 242);
    margin-left: 50px;
    margin-bottom: 50px;
    margin-right: 70px;
    box-shadow:  0px 10px 10px rgba(0,0,0,0.1);
    border-radius: 2px;
    color: white; 
    background-image: url("./img/celu.jpg");
    background-repeat: no-repeat;
    background-size:cover ; 
}
.listpc{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    background-color: rgb(242, 242, 242);
    margin-left: 50px;
    margin-bottom: 50px;
    margin-right: 70px;
    box-shadow:  0px 10px 10px rgba(0,0,0,0.1);
    border-radius: 2px;
    color: white; 
    background-image: url("./img/compu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.listvideo{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    /* background-color: rgb(242, 242, 242); */
    margin-left: 50px;
    margin-bottom: 50px;
    margin-right: 70px;
    box-shadow:  0px 10px 10px rgba(0,0,0,0.1);
    border-radius: 2px;
    color: white; 
    background-image: url("./img/video.JPG");
    background-repeat: no-repeat;
    background-size: cover;
}
.listsoft{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    background-color: rgb(242, 242, 242);
    margin-left: 50px;
    margin-bottom: 50px;
    margin-right: 70px;
    box-shadow:  0px 10px 10px rgba(0,0,0,0.1);
    border-radius: 2px;
    color: white; 
    background-image: url("./img/soft.jpg");
    background-repeat: no-repeat;
    background-size:cover;
}
}


h3{
width: 100%;
margin-left: 40px;
text-align: leftt;

}

`
