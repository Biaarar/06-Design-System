import { ComponentProps } from "react";
import { Label, MultiStepContainer, Step, Steps } from "./Styles";

export interface MultiStepProps extends ComponentProps<typeof MultiStepContainer> {
    size: number;
    currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
    return (
        <MultiStepContainer>
            <Label>Passo {currentStep} de {size}</Label>
            <Steps css={{ '--steps-size': size }}>
                {Array.from({ length: size }, (_, i) => i + 1 ).map((step) => {
                    return(
                        <Step key={step} active={currentStep >= step}></Step>
                    )
})}
            </Steps>
        </MultiStepContainer>
    );
}
MultiStep.displayName = 'MultiStep';