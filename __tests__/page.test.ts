import {describe, expect, test} from '@jest/globals';
import Home from "../src/app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'

describe("Calculator", () => {
   
    it('should pass all the tests', () => {
    const {result} = renderHook(() => Home())
    expect(result.all);
    expect(screen.findAllByTestId("result")).toBeInTheDocument;
    expect(screen.findAllByTestId("num1")).toBeInTheDocument;
    expect(screen.findAllByTestId("num2")).toBeInTheDocument;
    expect(screen.findAllByTestId("add")).toBeInTheDocument;
    expect(screen.findAllByTestId("subtract")).toBeInTheDocument;
    expect(screen.findAllByTestId("multiply")).toBeInTheDocument;
    expect(screen.findAllByTestId("divide")).toBeInTheDocument;
    });
});

