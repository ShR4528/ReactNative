import styled from 'styled-components/native';


const PostView = styled.View`
   flex-direction: row;
   margin-top: 20px;
   padding: 15px;
   border-bottom-width: 3px;
   border-bottom-color: rgba(0, 0, 0, 0.5);
   border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({ title, imageUrl, body }) => {
    return (
    <PostView>
    <PostImage source={{ uri: 'https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU' }} />
    <PostDetails> 
    <PostTitle>{title}</PostTitle>
    <PostDate>{body}</PostDate>
    </PostDetails>
    </PostView>
    )
}