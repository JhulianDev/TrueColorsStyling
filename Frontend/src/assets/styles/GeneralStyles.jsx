import styled from 'styled-components'

export const Section = styled.section`
	display: flex;
	align-items: ${(props) => props.$align || 'center'};
	justify-content: ${(props) => props.$justify || 'center'};

	width: ${(props) => props.$width || '100%'};
	min-height: ${(props) =>
		props.$sectionTop ? 'calc(100vh - 60px)' : props.$height || '100vh'};

	background-color: ${(props) => props.$bgColor};
	border-bottom: ${(props) => props.$borderBottom && `1px solid #303030`};

	padding: 30px 60px;
`

export const MaxWidth = styled.div`
	display: flex;
	flex-direction: ${(props) => props.$flexDirection || 'row'};
	align-items: ${(props) => props.$align || 'center'};
	justify-content: ${(props) => props.$justify || 'space-between'};

	max-width: 1280px;
	width: 100%;
	height: 100px;

	text-align: center;

	@media screen and (max-width: 768px) {
		flex-direction: ${(props) => (!props.$header ? 'column' : 'initial')};
	}
`
