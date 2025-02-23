## Block Paper Scissors

> 블록체인 공부용

이더리움 스마트 컨트랙트를 활용한 가위바위보 게임입니다.

<img width="32%" alt="Image" src="https://github.com/user-attachments/assets/d71a9833-128e-427e-9493-447a0297640b" />

#### `MetaMask`

MetaMask를 통해 사용자의 Ethereum 계정을 인증해야 합니다.

MetaMask Chrome 확장 프로그램이 설치되지 않은 경우 게임을 실행할 수 없습니다.

<img src="https://github.com/user-attachments/assets/f35aa0e7-e13d-4338-844c-7a290fd227f6"  width="58%" alt="Image">

<div style="display:flex; gap: 2px; padding-top: 2px;">
<img width="32%" alt="Image" src="https://github.com/user-attachments/assets/56a53022-3c26-4d90-8e5d-d82e72dfb763" />

<img width="32%" alt="Image" src="https://github.com/user-attachments/assets/ff4b09d9-a07b-4f88-acff-2604506df851" />

</div>

<br />

#### `가위바위보 선택 및 기록`

사용자는 가위/바위/보 중 하나를 선택하면 해당 선택이 블록체인에 기록됩니다.

선택된 값은 해시 처리되어 보안성이 유지됩니다.

<img width="33%" alt="Image" src="https://github.com/user-attachments/assets/dfe433ed-fe46-4a2d-98d0-de0c07e757ce" />

#### `결과 확인`

게임이 종료되면 스마트 컨트랙트가 결과를 저장합니다.

**특정 공개키**를 입력하면 입력한 공개키와 관련된 모든 게임의 결과를 확인할 수 있습니다.

#### `Web3 인증 및 트랜잭션 처리`

MetaMask를 통해 본인 지갑을 연결하고 트랜잭션 서명을 통해 게임 참여 및 결과 기록을 승인합니다.

게임 결과는 스마트 컨트랙트에 기록되며, 블록체인에 투명하게 저장됩니다.
