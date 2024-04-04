import { formatNumberWithCommas } from "@/src/utils/formatNumber";
import React from "react";

export default function DetailedSpecification({ trim }) {
  return (
    <div id="specifications" className="my-3">
      <div className="white_bg_wrapper">

        <h2 className={`w-100 fw-bold`}>
          Specifications of{" "}
          <span>
            {trim?.brand} {trim?.model} {trim?.name}
          </span>
        </h2>
        <hr className="my-2 heading-bottom " />
        {/* <div className="single-item mb-50" id="overview">
          <div className="overview">
            <div className="title mb-2">
              <h3>Engine</h3>
            </div>
            {trim?.fuelType === "Electric" ? (
              ""
            ) : (
              <div className="overview-content">
                <ul>
                  <li>
                    <span>No. of Cylinders</span> {trim?.cylinders ? trim?.cylinders : "-"}
                  </li>
                  <li>
                    <span>Displacement</span> {trim?.displacement}
                  </li>
                  <li>
                    <span>Power</span> {trim?.power}hp
                  </li>
                  
                </ul>
                <ul>
                  <li>
                    <span>Torque</span> {trim?.torque}Nm
                  </li>
                  <li>
                    <span>Fuel Type</span> {trim?.fuelType}
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
        </div> */}
        <div className="row mt-2">
          <div className="col-sm-6 col-12">
            {trim?.fuelType === "Electric" ? (
              ""
            ) : (
              <div className="white_bg_wrapper mt-1">
                <h3 className="fw-bold text-primary spec_head">Engine</h3>
                <hr className="my-2 heading-bottom " />
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>No. of Cylinders</p>
                  <p className="fw-bold">
                    {trim?.cylinders ? trim?.cylinders : "-"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Displacement</p>
                  <p className="fw-bold">{trim?.displacement}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Power</p>
                  <p className="fw-bold"> {trim?.power}hp</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Torque</p>
                  <p className="fw-bold"> {trim?.torque}Nm</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Fuel Type</p>
                  <p className="fw-bold"> {trim?.fuelType}</p>
                </div>
              </div>
            )}
            {trim?.fuelType === "Electric" || trim?.fuelType === "Hybrid" ? (
              <div className="white_bg_wrapper mt-2">
                <h3 className="fw-bold text-primary">Motor</h3>
                <hr className="my-2 heading-bottom " />
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Motor</p>
                  <p className="fw-bold"> {trim?.motor ? trim?.motor : "-"}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Battery Capacity</p>
                  <p className="fw-bold">
                    {" "}
                    {trim?.batteryCapacity ? trim?.batteryCapacity : "-"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Charging Time</p>
                  <p className="fw-bold">
                    {" "}
                    {trim?.chargingTime ? trim?.chargingTime : "-"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Battery Warranty</p>
                  <p className="fw-bold">
                    {" "}
                    {trim?.batteryWarranty ? trim?.batteryWarranty : "-"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Range</p>
                  <p className="fw-bold"> {trim?.range ? trim?.range : "-"}</p>
                </div>
                {trim?.fuelType === "Hybrid" ? (
                  ""
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <p>Power</p>
                      <p className="fw-bold">
                        {" "}
                        {trim?.power ? trim?.power + "hp" : "-"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <p>Torque</p>
                      <p className="fw-bold"> {trim?.torque}Nm</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <p>Fuel Type</p>
                      <p className="fw-bold"> {trim?.fuelType}</p>
                    </div>
                  </>
                )}
              </div>
            ) : (
              ""
            )}

            <div className="white_bg_wrapper mt-2">
              <h3 className="fw-bold text-primary">Transmission</h3>
              <hr className="my-2 heading-bottom " />
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Drive</p>
                <p className="fw-bold"> {trim?.drive}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Transmission type</p>
                <p className="fw-bold"> {trim?.transmission}</p>
              </div>
              {trim?.fuelType === "Electric" ? (
                ""
              ) : (
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>No. of Gears</p>
                  <p className="fw-bold">
                    {trim?.gearBox ? (
                      <>
                        {trim?.gearBox === "CVT"
                          ? "-"
                          : trim?.gearBox.slice(0, -1) + "-speed"}
                      </>
                    ) : (
                      "-"
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="white_bg_wrapper mt-2">
              <h3 className="fw-bold text-primary">Safety</h3>
              <hr className="my-2 heading-bottom " />
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>ABS</p>
                <p className="fw-bold">
                  <i className="bi bi-check-lg" />
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Brake Type</p>
                <div className="d-flex">
                  <div className="d-flex flex-row align-items-center me-2">
                    <p className="fw-bold">
                      Front: {trim?.frontBrakes?.replace("(ABS)", "")}
                    </p>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <p className="fw-bold ">
                      Rear: {trim?.rearBrakes?.replace("(ABS)", "")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>No. of Airbags</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.airbags ? trim?.airbags : "-"}
                </p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Airbag Type</p>
                <div className="d-flex">
                  {trim?.haveFrontAirbags ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">Front</p>
                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {trim?.haveSideAirbags ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">Side</p>

                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {trim?.haveRearAirbags ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">Rear</p>

                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Park Assist</p>
                <div className="d-flex">
                  {trim?.haveFrontParkAssist ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">Front</p>

                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {trim?.haveRearParkAssist ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">Rear</p>

                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Parking Camera</p>
                <div className="d-flex">
                  {trim?.haveRearParkingCamera ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">Rear</p>

                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {trim?.have360ParkingCamera ? (
                    <div className="d-flex flex-row align-items-center ms-2">
                      <p className="fw-bold">360</p>

                      <p className="fw-bold">
                        <i className="bi bi-check-lg"></i>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Cruise Control</p>
                {trim?.haveCruiseControl ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Adaptive Cruise Control</p>
                {trim?.haveCruiseControl ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Lane Change Assist</p>
                {trim?.haveLaneChangeAssist ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-12 mt-sm-0 mt-2">
            {trim?.fuelType === "Electric" ? (
              ""
            ) : (
              <div className="white_bg_wrapper mt-1">
                <h3 className="fw-bold text-primary">Fuel Efficiency</h3>
                <hr className="my-2 heading-bottom " />
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Tank Size</p>
                  <p className="fw-bold">
                    {" "}
                    {trim?.fuelTankSize ? trim?.fuelTankSize + "L" : "-"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <p>Fuel Consumption</p>
                  <p className="fw-bold"> {trim?.fuelConsumption}kmpl</p>
                </div>
              </div>
            )}

            <div className="white_bg_wrapper mt-2">
              <h3 className="fw-bold text-primary">Performance</h3>
              <hr className="my-2 heading-bottom " />
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Zero to Hundred</p>
                <p className="fw-bold"> {trim?.zeroToHundred}seconds</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Top Speed</p>
                <p className="fw-bold"> {trim?.topSpeed}kmph</p>
              </div>
            </div>

            <div className="white_bg_wrapper mt-2">
              <h3 className="fw-bold text-primary">Dimensions</h3>
              <hr className="my-2 heading-bottom " />
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Body Type</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.bodyType ? trim?.bodyType : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Doors</p>
                <p className="fw-bold"> {trim?.doors ? trim?.doors : "-"}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Length</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.length ? formatNumberWithCommas(trim?.length) + "mm" : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Width</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.width ? formatNumberWithCommas(trim?.width) + "mm" : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Wheelbase</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.wheelbase ? formatNumberWithCommas(trim?.wheelbase) + "mm" : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Weight</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.weight ? formatNumberWithCommas(trim?.weight) + "kg" : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Front Tyre</p>
                <p className="fw-bold">
                  {trim?.tyresFront !== "" ? trim?.tyresFront : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Rear Tyre</p>
                <p className="fw-bold">
                  {trim?.tyresRear !== "" ? trim?.tyresRear : "-"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Cargo Space</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.cargoSpace ? trim?.cargoSpace + "L" : "-"}
                </p>
              </div>
            </div>
            <div className="white_bg_wrapper mt-2">
              <h3 className="fw-bold text-primary">Interior</h3>
              <hr className="my-2 heading-bottom " />
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Leather Interior</p>
                {trim?.haveLeatherInterior ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Fabric Interior</p>
                {trim?.haveFabricInterior ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Rear Seat Entertainment</p>
                {trim?.haveRearSeatEntertainment ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Cooled Seats</p>
                {trim?.haveCooledSeats ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Climate Control</p>
                {trim?.haveClimateControl ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Seating Capacity</p>
                <p className="fw-bold">
                  {" "}
                  {trim?.seatingCapacity &&
                    trim?.seatingCapacity?.split(" ")[0]}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Apple Car Play</p>
                {trim?.haveAppleCarPlay ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <p>Android Auto</p>
                {trim?.haveAndroidAuto ? (
                  <i className="bi bi-check-lg"></i>
                ) : (
                  <b>-</b>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
