import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6cd290f32e4f18a4431ec8be64356258";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.484976, 126.896297), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
          disableDoubleClickZoom: true,
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        var markerPosition = new window.kakao.maps.LatLng(
          37.484976,
          126.896297
        );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
        map.setDraggable(false);
        map.setZoomable(false);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent: any) {
        //     // 클릭한 위도, 경도 정보를 가져옵니다
        //     const latlng = mouseEvent.latLng;

        //     // 마커 위치를 클릭한 위치로 옮깁니다
        //     marker.setPosition(latlng);
        //   }
        // );
      });
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
