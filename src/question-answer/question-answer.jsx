import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function QuestionAnswer() {
  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(5);
  const handleAccordion1 = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleAccordion2 = (value) => {
    setOpen2(open === value ? 0 : value);
  };
  return (
    <section className="bg-[#1C263905] py-14 my-10 lg:my-4 lg:py-20">
      <div className="container mx-auto px-3 max-w-[1330px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:leading-[1.35]">
            How to Make Money Investing in Startups
          </h2>
          <p className="text-lg text-[#555555] py-5 md:py-8 lg:py-14 xl:py-8 max-w-2xl mx-auto">
            When you invest in a startup crowdfunding site, you enter into an
            investment contract with the company. Broadly speaking, there are
            kind
          </p>
        </div>
        <div className="w-full my-6 flex flex-col lg:flex-row gap-10">
          <div>
            <Fragment>
              <Accordion
                open={open === 1}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion1(1)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  Can I invest in without putting in money?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion1(2)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  How can approach a startup investment?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 3}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion1(3)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  What unique features are you working on?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 4}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion1(4)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  How will scaling impact profit margins?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
          <div>
            <Fragment>
              <Accordion
                open={open2 === 5}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion2(5)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  How many actual users do you have?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open2 === 6}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion2(6)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  Has growth been linear and consistent?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open2 === 7}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion2(7)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  What is unique about the company?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open2 === 8}
                className="my-5 bg-[#fff] border rounded-[20px] px-4 py-2"
              >
                <AccordionHeader
                  onClick={() => handleAccordion2(8)}
                  className="border-none flex flex-row-reverse justify-end gap-2 text-2xl font-medium text-left"
                >
                  How will these funds be allocated?
                </AccordionHeader>
                <AccordionBody className="px-6 text-lg text-[#555555] pb-4 pt-0">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
}
