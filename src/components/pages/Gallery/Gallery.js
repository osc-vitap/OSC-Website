import React from 'react';
import Header from "../../Header/Header";
import { headerObjNine } from "../../Header/HeaderData";
import GalleryCard from './GalleryCard';
import "./Gallery.css"

function Gallery() {
  const id = [

    {
      imageid: "https://docs.google.com/uc?id=1cl9ueP9Vl9Se2wY8zaR9ljt49UWFcH-Y",
      imagename: "image 1"
    },
    {
      imageid: "https://docs.google.com/uc?id=1ih8rpcCLk_GzCSm6mEOcZ4AGEcrY1w1z",
      imagename: "image 2"
    },
    {
      imageid: "https://docs.google.com/uc?id=1uGkJGdOomaT5grtcZTqEl0birYuKJ7_X",
      imagename: "image 3"
    },
    {
      imageid: "https://docs.google.com/uc?id=10jcy-ixWmcAKp_kT440ZYWxffx3pO4oJ",
      imagename: "image 4"
    },
    {
      imageid: "https://docs.google.com/uc?id=1VZAx77nGovM78yTwzxh4jLM2IXwVnH5o",
      imagename: "image 5"
    },
    {
      imageid: "https://docs.google.com/uc?id=1ib0uOBXSrsf6769YWr71toXvSIqla6q7",
      imagename: "image 6"
    },
    {
      imageid: "https://docs.google.com/uc?id=1p3fH14OpA1GE0ViRGOugVWuA7ObuV8zC",
      imagename: "image 7"
    },
    {
      imageid: "https://docs.google.com/uc?id=10a29yuMJYAKU1Kggm7NxlJCNNnq9RNZX",
      imagename: "image 8"
    },
    {
      imageid: "https://docs.google.com/uc?id=1n1GlpiUZcW5w_p9aweWQO2r3Qoaccqur",
      imagename: "image 9"
    },
    {
      imageid: "https://docs.google.com/uc?id=1O5CaWfZZM01kgr5NAEhhGXjDIjWGvShS",
      imagename: "image 10"
    },
    {
      imageid: "https://docs.google.com/uc?id=12-9r9VennXxVTBF_GGRdiS0uv69aNIo5",
      imagename: "image 11"
    },
    {
      imageid: "https://docs.google.com/uc?id=1zkcXaXtN-QFbVWUTzZaszEisN9dcK3Ui",
      imagename: "image 12"
    },
    {
      imageid: "https://docs.google.com/uc?id=1Bh4KZDh4f8Z3XGOPU1X-bOEvOyjhkDPG",
      imagename: "image 13"
    },
    {
      imageid: "https://docs.google.com/uc?id=1XplIF5_Tr4c-vL39pXxHVB8UNQIC2SFA",
      imagename: "image 14"
    },
    {
      imageid: "https://docs.google.com/uc?id=1k-p0Rk2Wcl8Ax2PJG07x-qeflCNJ0NH5",
      imagename: "image 15"
    },
    {
      imageid: "https://docs.google.com/uc?id=1TJaHFy2gkpHtaAgj95657M3prsTygL2i",
      imagename: "image 16"
    },
    {
      imageid: "https://docs.google.com/uc?id=1JEgGyf4G0INiS-kZzs3W10cAo8sjykY1",
      imagename: "image 17"
    },
    {
      imageid: "https://docs.google.com/uc?id=14lCq3oURsKe6VQS7RsnvemvZuKyK2rlE",
      imagename: "image 18"
    },
    {
      imageid: "https://docs.google.com/uc?id=1WHakKYPrgI_LNM1HXsgyy_8PqOMkle6t",
      imagename: "image 19"
    },
    {
      imageid: "https://docs.google.com/uc?id=1bE-pbnt6DXDxBwOE690DcXVZ9ZSUVQ78",
      imagename: "image 20"
    },
    {
      imageid: "https://docs.google.com/uc?id=1rz8Dj5j_C9M5gh-eWuxh1js4qLSAef3t",
      imagename: "image 21"
    },
    {
      imageid: "https://docs.google.com/uc?id=1glN3IfSa5QDduWMYNQ5tvW1_Dz_GlSBo",
      imagename: "image 22"
    },
    {
      imageid: "https://docs.google.com/uc?id=1WxgOJo59oChwIpLGBMU0AxNEqLmHo0tm",
      imagename: "image 23"
    },
    {
      imageid: "https://docs.google.com/uc?id=1rDd4JgLGrbw40tGh83qRvRZyMKAbCLy5",
      imagename: "image 24"
    },{
      imageid: "https://docs.google.com/uc?id=130PwcozCqDhjxHkgTUShewm89ZL_AZ_j",
      imagename: "image 25"
    },{
      imageid: "https://docs.google.com/uc?id=1axq7LRwLyvDzV96GRaES4UNQQZYYSHh",
      imagename: "image 26"
    },{
      imageid: "https://docs.google.com/uc?id=1z64sYkfsFysXfPN0h3REzrW5cuY2jK2R",
      imagename: "image 27"
    }
  ];

  return (
    <>
      <Header {...headerObjNine} />
      <div className="tclContainer">
        <div className="Row">
          {id.map((i) => (
            <GalleryCard
              imageID={i.imageid}
              imageName={i.imagename}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      
    </>
  );
}

export default Gallery;