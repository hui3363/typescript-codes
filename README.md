# Typescript 

typescript 문법 공부

### 컴파일 & 실행
1) typescript 전역 설치<br>
`npm i -g typescript`<br><br>
2) ts -> js 컴파일<br>
`cd ./02.type`<br>
`tsc -w`<br>
  - -w : .ts 파일 저장시 자동 컴파일 옵션<br>

3) console.log 확인방법<br>
`live server 설치(VS Code extensions) 및 실행`

### 폴더
##### 01.default-setting
- tsconfig.json 설정방법

##### 02.types
- Type

##### 03.type-assertion,type-guard
- Type Assertion  
  시스템이 추론, 분석한 타입 내용을 개발자가 마음대로 바꿀때 사용
- Type Guard


##### 04.type,interface
  타입의 이름을 지정하는 방법

- Type Alias  
  intersection을 이용해 확장

- Interface  
  extends을 이용해 확장. 선언 병합 가능

  Union 으로 타입 A, 타입 B가 될수 있는 새 Type을 만들수 있다. (선언은 type으로 해야함)

##### 05.call-signature,index-signature
- call signature   
  interface를 만들어서 재사용할때 소괄호로 명시  
  `(like: number): number;`

- index signature  
  계속 속성이 추가되어서 어떤 type이 될지 모를때 사용
  1) 객체 인덱스 시그니처    
		`[key: string]: unknown;`
	2) 배열 인덱스 시그니처  
	  `[item: number]: string;`

##### 06.overloading
- 함수 오버로딩  
  기본적인 구조는 같지만 매개변수가 다를때 두 함수를 하나로 만들기

##### 07.access-modifier
- 접근 제어자  
  public : default 값이며 어디서나 접근 가능  
  protected: 클래스 내, 상속받은 자식 클래스에서 접근 가능  
  private: 클래스 내에서만 접근 가능

##### 08.generics
- gererics  
  재사용성이 높은 함수와 클래스 생성가능  
  any 처럼 타입을 직접 지정하지 않지만, 타입을 체크해 컴파일러가 오류를 찾을수 있게됨

##### 09.utility-types
- Partial
  부분적으로 사용하고 싶을때
- Pick
  특정한 몇개를 선택하기
- Omit
  특정한 몇개를 제외할때
- Exclude
  Union 유형을 전달한다음 두번째 인수에서 제거할 멤버 지정
- Required
  일부 속성을 선택사항으로 정의한 경우에도 필수로 넣어야함
- Record<Keys, Type>
  속성 키가 Keys이고 속성 값이 Type인 객체 type을 구성
- ReturnType
  함수의 반환 타입으로 구성된 타입 만들기

##### 10.implements
- implements
  impements는 상속이 아니라 그 형태로 만들어주는것

##### 11.keyof
- keyof  
  제공된 타입의 키를 추출하여 새로운 Union 형태

##### 12.mapped-types
- mapped type
  type이 다른 type에서 파생되고 동기화 상태를 유지해야하는 경우

##### 13.ts-config
- tsconfig.json
- 주요 옵션
  - compilerOptions  
  - files | include : 변환할 파일 위치
  - exclude : 변환하지 않을 폴더
  - extends : 다른 config 상속받아 쓰기
  - lib : 라이브러리
  - moduleResolution : 컴파일러가 모듈을 찾는 방법 
      - 상대적, 비상대적 경로
      - classic 전략, node 전략
  - baseUrl : 비상대적 모듈 해석 과정에 0번째 순서를 baseUrl으로 추가
  - paths : "@src/*" 를 'src/*' 지정하면 상대경로 가져올필요없이 바로 @src/file명 으로 가져올수 있음
  - isoltatedModules  
  - romoveComments : 타입스크립트의 모든 주석 제거
  - allowJs : js와 ts 같이 사용
  - checkJs : allowJs와 같이 사용하고, js의 오류가 보고됨
  - forceConsistentCasingInFileNames: 파일의 이름 대소문자 판별
  - declaration : js 뿐만 아니라 d.ts 선언파일이 같이 생성됨
  - strict: 더 엄격한 타입 체크

