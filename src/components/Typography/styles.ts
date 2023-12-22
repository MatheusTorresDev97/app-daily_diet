import styled from 'styled-components/native'

export const Container = styled.Text`
    text-align: left;
    font-family: ${({theme}) => theme.font_family.regular};
    line-height: ${({theme}) => theme.line_height.md}px;
    font-size: ${({theme}) => theme.font_size.body.md}px;
    color: ${({theme}) => theme.colors.base.gray_1};
`