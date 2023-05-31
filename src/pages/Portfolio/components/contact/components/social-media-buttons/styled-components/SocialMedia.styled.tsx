import styled from 'styled-components'

export const SocialMediaContainer = styled.div`

a{
    text-decoration: none;
}

  .button{
    display: inline-block;
    height: 60px;
    width: 60px;
    float: left;
    margin: 0 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease-out;


    .icon{
        display: inline-block;
        height: 60px;
        width: 60px;
        text-align: center;
        border-radius: 50px;
        box-sizing: border-box;
        line-height: 60px;
        transition: all 0.3s ease-out;
        i{
            font-size: 25px;
            line-height: 60px;
            transition: all 0.3s ease-out;
    }
    }
    span{
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        margin-left: 10px;
        transition: all 0.3s ease-out;
        text-decoration: none;
    }
}
    .button:hover{
        width: 200px;
        i{
            color: #fff;
        }
        text-decoration: none;
    }
    .button:nth-child(1):hover .icon{
        background: #4267B2;
    }
    .button:nth-child(2):hover .icon{
        background: #E1306C;
    }
    .button:nth-child(3):hover .icon{
        background: #25D366;
    }

    .button:nth-child(1) span{
        color: #4267B2;
    }
    .button:nth-child(2) span{
        color: #E1306C;
    }
    .button:nth-child(3) span{
        color: #25D366;
    }

    @media (min-width: 786px) {
        .button:nth-child(1){
            margin-right: 45px;
        }
        .button:nth-child(2){
            margin-right: 45px;
        }
    }
`