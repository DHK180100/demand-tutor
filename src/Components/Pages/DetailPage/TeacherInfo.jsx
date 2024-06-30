import React from "react";
import styled from "styled-components";
import ppht1 from "../../Assets/discordicon1.png";
import ppht2 from "../../Assets/ggmeet1.png";
import ppht3 from "../../Assets/zoom1.png";

const InfoContainer = styled.div`
  max-width: 1100px;
  padding: 16px;
  background-color: white;
  //   border: 1px solid #eaeaea;
  border-radius: 8px;
  margin-top: 16px;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const InfoContent = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const TeacherInfo = ({ information }) => {
  return (
    <InfoContainer>
      <div>
        <InfoTitle>Thông tin giới thiệu</InfoTitle>
        <InfoContent>
          <p className="my-2">{information}</p>
          {/* <p className="my-2">
            Tôi là Cô Giáo Mai Trần, một giáo viên tiểu học tận tâm và đam mê
            với nghề nghiệp giáo dục. Với hơn 10 năm kinh nghiệm trong lĩnh vực
            giảng dạy, tôi tin rằng mỗi đứa trẻ đều có tiềm năng riêng và quyền
            được phát triển toàn diện trong một môi trường học tập an toàn, đầy
            đủ yêu thương và hỗ trợ.
          </p> */}
          {/* Add the rest of the information content here */}
          {/* <p className="my-2">Về Tôi:</p>
          <div className="ml-4">
            <li className="list-dist">
              Học vị: Bằng cử nhân Sư phạm Tiểu học, Đại học Sư phạm TP.HCM.
            </li>
            <li className="list-dist">
              Kinh nghiệm: Hơn 10 năm giảng dạy tại các trường tiểu học cộng
              đồng và tư thục.
            </li>
            <li className="list-dist">
              Phương châm: "Học là để hiểu, hiểu là để yêu, yêu là để chia sẻ."
            </li>
          </div>
          <p className="my-2">Phương Pháp Giảng Dạy:</p>
          <div className="ml-4">
            <li className="list-dist">
              Sử dụng phương pháp học tập tích cực, khuyến khích sự tò mò và
              sáng tạo của học sinh.
            </li>
            <li className="list-dist">
              Tạo ra một môi trường học tập vui vẻ, hỗ trợ và động viên mỗi em
              học sinh phát triển tốt nhất.
            </li>
          </div>
          <p className="my-2">Mục Tiêu:</p>
          <div className="ml-4">
            <li className="list-dist">
              Giúp học sinh phát triển các kỹ năng cơ bản như đọc, viết, và tính
              toán một cách tự tin và thành thạo.
            </li>
            <li className="list-dist">
              Khuyến khích sự phát triển toàn diện của học sinh trong các mảng
              như nghệ thuật, thể chất và tinh thần.
            </li>
          </div> */}
        </InfoContent>
      </div>
      <div className="mt-20 flex items-center">
        <h2 className="text-2xl font-semibold mb-4 mr-10">
          Phương tiện học tập
        </h2>
        <div className="flex ">
          <img className="mr-10" src={ppht1} />
          <img className="mr-10" src={ppht2} />
          <img className="mr-10" src={ppht3} />
        </div>
      </div>
    </InfoContainer>
  );
};

export default TeacherInfo;
