<h3>R076_ContextApi</h3>
학습 내용 : 컨텍스트 api의 사용 방법을 이해한다
힌트 내용 : 컨텍스트 api와 props를 비교해 특징을 확인한다

1. props를 사용하면 데이터를 부모 컴포넌트에서 자식 컴포넌트로 전송할 수 있다
2. 그런데 만약 손자 컴포넌트가 부모 컴포넌트의 데이터를 필요로 한다면, 자식 컴포넌트가 중간에서 데이터를 전달해야 한다
3. 이때 자식 컴포넌트가 부모 컴포넌트의 데이터가 필요하지 않은 상황이라면 불필요한 코드를 작성하게 된다
4. 컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현할 수 있다.

+) 컨텍스트를 사용하면 하위 컴포넌트가 여러 개인 구조에서 유용하게 사용할 수 있다
몇번째 하위 컴포넌트인지와는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있다. 

<h3>R077_ContextApi</h3>