import Image from "next/image";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-center mb-12 relative w-full h-16 p-12">
        <Image src="/logo.svg" alt="Chronicle Logo" fill objectFit="contain" />
      </div>

      <h1 className="text-3xl font-bold mb-6">개인정보 처리방침</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
        <p className="mb-2">
          Chronicle는 다음과 같은 목적을 위해 개인정보를 처리합니다.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>서비스 제공: 일기 작성</li>
          <li>
            사용자 관리: 회원 가입 및 관리, 개인 식별, 서비스 이용 기록 관리 및
            부정 이용 방지.
          </li>
          <li>
            서비스 개선 및 맞춤형 서비스 제공: 사용자 경험 개선 및 개인화된
            서비스 제공.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. 수집하는 개인정보 항목 및 수집 방법
        </h2>
        <p className="mb-2">
          수집 정보: 사용자가 학교 구글 계정으로 서비스에 로그인할 때, 구글 계정
          정보(이름, 이메일 주소)를 수집합니다.
        </p>
        <p>수집 방법: 사용자가 서비스에 로그인할 때 자동으로 수집합니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. 개인정보의 처리 및 보유 기간
        </h2>
        <p>
          보유 기간: 개인정보는 서비스 이용 계약 체결 및 이행부터 서비스 이용
          계약 종료 시까지 보유 및 이용됩니다. 단, 관련 법령에 따른 개인정보
          보유 기간이 있는 경우, 해당 기간 동안 보유합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. 개인정보의 제3자 제공 및 위탁 처리
        </h2>
        <p>
          "Chronicle"는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지
          않습니다. 서비스 향상을 위해 필요한 경우 및 법적 의무 이행을 위해
          제한적으로 개인정보를 제3자에게 제공할 수 있습니다. 이 경우 사전에
          사용자의 동의를 얻습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. 개인정보 보호를 위한 기술적·관리적 대책
        </h2>
        <p>
          "Chronicle"는 사용자의 개인정보를 안전하게 처리하기 위해 개인정보
          암호화, 접근 권한 관리 및 접근 통제, 보안 프로그램 설치 및 주기적인
          갱신·점검 등의 대책을 시행합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. 사용자 및 법정 대리인의 권리와 그 행사 방법
        </h2>
        <p className="mb-2">
          - 사용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할
          권리를 가지고 있습니다. 사용자는 개인정보의 처리에 대한 동의를 철회할
          수 있는 권리를 가집니다. 이러한 권리는 "Chronicle"의 고객 서비스 담당
          부서에 서면, 전화, 이메일 등을 통해 요청함으로써 행사할 수 있습니다.
          "Chronicle"는 사용자의 개인정보를 보호하고, 사용자가 안심하고 서비스를
          이용할 수 있도록 최선을 다하고 있습니다. 사용자의 개인정보와 관련된
          모든 문의사항에 대하여 신속하고 충실하게 답변할 준비가 되어 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. 개인정보 보호책임자 및 연락처
        </h2>
        <p>개인정보 보호책임자: 김성빈</p>
        <p>
          연락처:{" "}
          <a href="mailto:software@seogaemo.com" className="text-blue-500">
            software@seogaemo.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          8. 개인정보 처리방침 변경에 관한 사항
        </h2>
        <p>
          본 개인정보 처리방침은 법률, 정책 또는 보안기술의 변경에 따라 내용의
          추가, 삭제 및 수정이 있을 수 있으며, 변경된 사항은 최소 7일 전부터
          "Chronicle"의 공지사항을 통해 사전에 알릴 예정입니다. 이러한 변경에는
          개인정보 수집 항목의 추가, 처리 목적의 변경, 개인정보의 제3자 제공
          관련 사항 변경 등이 포함될 수 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. 개인정보 처리방침의 적용 범위
        </h2>
        <p>
          본 개인정보 처리방침은 "Chronicle"에서 제공하는 모든 서비스에
          적용되며, "Chronicle”이 운영하는 모든 웹사이트, 모바일 애플리케이션 및
          기타 플랫폼을 포함합니다. 그러나 "Chronicle" 외부로 링크된
          사이트에서는 본 개인정보 처리방침이 적용되지 않습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. 문의사항</h2>
        <p>
          개인정보 처리방침에 대한 궁금증이나 우려사항이 있으시면 언제든지
          개인정보 보호책임자에게 문의해주세요.
        </p>
      </section>
    </div>
  );
}
