export declare abstract class AbstractControl {
    abstract get asyncValidator(): AsyncValidatorFn | null;
    abstract set asyncValidator(asyncValidatorFn: AsyncValidatorFn | null);
    get dirty(): boolean;
    get disabled(): boolean;
    get enabled(): boolean;
    readonly errors: ValidationErrors | null;
    get invalid(): boolean;
    get parent(): FormGroup | FormArray | FormSection | null;
    get pending(): boolean;
    readonly pristine: boolean;
    get root(): AbstractControl;
    readonly status: string;
    readonly statusChanges: Observable<any>;
    readonly touched: boolean;
    get untouched(): boolean;
    get updateOn(): FormHooks;
    get valid(): boolean;
    abstract get validator(): ValidatorFn | null;
    abstract set validator(validatorFn: ValidatorFn | null);
    abstract readonly value: any;
    abstract readonly valueChanges: Observable<any>;
    constructor(validators: ValidatorFn | ValidatorFn[] | null, asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null);
    clearAsyncValidators(): void;
    clearValidators(): void;
    disable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    enable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    get(path: Array<string | number> | string): AbstractControl | null;
    getError(errorCode: string, path?: Array<string | number> | string): any;
    hasError(errorCode: string, path?: Array<string | number> | string): boolean;
    markAllAsTouched(): void;
    markAsDirty(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsPending(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    markAsPristine(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsTouched(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsUntouched(opts?: {
        onlySelf?: boolean;
    }): void;
    abstract patchValue(value: any, options?: Object): void;
    abstract reset(value?: any, options?: Object): void;
    abstract setAsyncValidators(newValidator: AsyncValidatorFn | AsyncValidatorFn[] | null): void;
    setErrors(errors: ValidationErrors | null, opts?: {
        emitEvent?: boolean;
    }): void;
    setParent(parent: FormGroup | FormArray | FormSection): void;
    abstract setValidators(newValidator: ValidatorFn | ValidatorFn[] | null): void;
    abstract setValue(value: any, options?: Object): void;
    updateValueAndValidity(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare abstract class AbstractControlDirective {
    get asyncValidator(): AsyncValidatorFn | null;
    abstract get control(): AbstractControl | null;
    get dirty(): boolean | null;
    get disabled(): boolean | null;
    get enabled(): boolean | null;
    get errors(): ValidationErrors | null;
    get invalid(): boolean | null;
    get path(): string[] | null;
    get pending(): boolean | null;
    get pristine(): boolean | null;
    get status(): string | null;
    get statusChanges(): Observable<any> | null;
    get touched(): boolean | null;
    get untouched(): boolean | null;
    get valid(): boolean | null;
    get validator(): ValidatorFn | null;
    get value(): any;
    get valueChanges(): Observable<any> | null;
    getError(errorCode: string, path?: Array<string | number> | string): any;
    hasError(errorCode: string, path?: Array<string | number> | string): boolean;
    reset(value?: any): void;
}

export declare interface AbstractControlOptions<T extends AbstractControl = AbstractControl> {
    asyncValidators?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null;
    updateOn?: 'change' | 'blur' | 'submit';
    validators?: ValidatorFn<T> | ValidatorFn<T>[] | null;
}

export declare class AbstractFormGroupDirective extends ControlContainer implements OnInit, OnDestroy {
    get control(): FormGroup;
    get formDirective(): Form | null;
    get path(): string[];
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare interface AsyncValidator<T extends AbstractControl = any> extends Validator<T> {
    validate(control: T): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

export declare interface AsyncValidatorFn<T extends AbstractControl = any> {
    (control: T): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

export declare class CheckboxControlValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class CheckboxRequiredValidator extends RequiredValidator {
    validate(control: FormControl<boolean>): ValidationErrors | null;
}

export declare const COMPOSITION_BUFFER_MODE: InjectionToken<boolean>;

export declare abstract class ControlContainer extends AbstractControlDirective {
    get formDirective(): Form | null;
    name: string | number | null;
    get path(): string[] | null;
}

export declare interface ControlValueAccessor {
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(obj: any): void;
}

export declare class DefaultValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _compositionMode: boolean);
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class EmailValidator implements Validator {
    set email(value: boolean | string);
    registerOnValidatorChange(fn: () => void): void;
    validate(control: FormControl<string>): ValidationErrors | null;
}

export declare interface Form {
    addControl(dir: NgControl): void;
    addFormGroup(dir: AbstractFormGroupDirective): void;
    getControl(dir: NgControl): FormControl;
    getFormGroup(dir: AbstractFormGroupDirective): FormGroup;
    removeControl(dir: NgControl): void;
    removeFormGroup(dir: AbstractFormGroupDirective): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare class FormArray<T extends AbstractControl = any> extends AbstractControl {
    get asyncValidator(): AsyncValidatorFn<FormArray<T>> | null;
    set asyncValidator(asyncValidatorFn: AsyncValidatorFn<FormArray<T>> | null);
    controls: T[];
    get length(): number;
    get validator(): ValidatorFn<FormArray<T>> | null;
    set validator(validatorFn: ValidatorFn<FormArray<T>> | null);
    readonly value: ValueType<T>[];
    readonly valueChanges: Observable<ValueType<T>[]>;
    constructor(controls: T[], validatorOrOpts?: ValidatorFn<FormArray<T>> | ValidatorFn<FormArray<T>>[] | AbstractControlOptions<FormArray<T>> | null, asyncValidator?: AsyncValidatorFn<FormArray<T>> | AsyncValidatorFn<FormArray<T>>[] | null);
    at(index: number): T;
    clear(): void;
    getRawValue(): ValueType<T>[];
    insert(index: number, control: T): void;
    patchValue(value: StateType<T>[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    push(control: T): void;
    removeAt(index: number): void;
    reset(value?: StateType<T>[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setAsyncValidators(newValidator: AsyncValidatorFn<FormArray<T>> | AsyncValidatorFn<FormArray<T>>[] | null): void;
    setControl(index: number, control: T): void;
    setValidators(newValidator: ValidatorFn<FormArray<T>> | ValidatorFn<FormArray<T>>[] | null): void;
    setValue(value: StateType<T>[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare class FormArrayName extends ControlContainer implements OnInit, OnDestroy {
    get control(): FormArray;
    get formDirective(): FormGroupDirective | null;
    name: string | number | null;
    get path(): string[];
    constructor(parent: ControlContainer, validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[]);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class FormBuilder {
    array<T extends AbstractControl = AbstractControl>(controlsConfig: T[], validatorOrOpts?: ValidatorFn<FormArray<T>> | ValidatorFn<FormArray<T>>[] | AbstractControlOptions<FormArray<T>> | null, asyncValidator?: AsyncValidatorFn<FormArray<T>> | AsyncValidatorFn<FormArray<T>>[] | null): FormArray<T>;
    array<T>(controlsConfig: FormControlConfig<T>[], validatorOrOpts?: ValidatorFn<FormArray<FormControl<T>>> | ValidatorFn<FormArray<FormControl<T>>>[] | AbstractControlOptions<FormArray<FormControl<T>>> | null, asyncValidator?: AsyncValidatorFn<FormArray<FormControl<T>>> | AsyncValidatorFn<FormArray<FormControl<T>>>[] | null): FormArray<FormControl<T>>;
    control<T = any>(formState: FormControlState<T>, validatorOrOpts?: ValidatorFn<FormControl<T>> | ValidatorFn<FormControl<T>>[] | AbstractControlOptions<FormControl<T>> | null, asyncValidator?: AsyncValidatorFn<FormControl<T>> | AsyncValidatorFn<FormControl<T>>[] | null): FormControl<T>;
    group<T extends AbstractControl>(controlsConfig: {
        [key: string]: T;
    }, options?: AbstractControlOptions<FormGroup<T>> | null): FormGroup<T>;
    /** @deprecated */ group<T extends AbstractControl>(controlsConfig: {
        [key: string]: T;
    }, options: {
        [key: string]: any;
    }): FormGroup<T>;
    group<T>(controlsConfig: {
        [key: string]: FormControlConfig<T>;
    }, options?: AbstractControlOptions<FormGroup<FormControl<T>>> | null): FormGroup<FormControl<T>>;
    /** @deprecated */ group<T>(controlsConfig: {
        [key: string]: FormControlConfig<T>;
    }, options: {
        [key: string]: any;
    }): FormGroup<FormControl<T>>;
    section<T extends {
        [key: string]: AbstractControl | FormControlConfig<any>;
    }>(controlsConfig: T, options?: AbstractControlOptions<FormSection<ConfigToForm<T>>> | null): FormSection<ConfigToForm<T>>;
    /** @deprecated */ section<T extends {
        [key: string]: AbstractControl | FormControlConfig<any>;
    }>(controlsConfig: T, options: {
        [key: string]: any;
    }): FormSection<ConfigToForm<T>>;
}

export declare class FormControl<T = any> extends AbstractControl {
    get asyncValidator(): AsyncValidatorFn<FormControl<T>> | null;
    set asyncValidator(asyncValidatorFn: AsyncValidatorFn<FormControl<T>> | null);
    get validator(): ValidatorFn<FormControl<T>> | null;
    set validator(validatorFn: ValidatorFn<FormControl<T>> | null);
    readonly value: T | null;
    readonly valueChanges: Observable<T | null>;
    constructor(formState?: FormControlState<T>, validatorOrOpts?: ValidatorFn<FormControl<T>> | ValidatorFn<FormControl<T>>[] | AbstractControlOptions<FormControl<T>> | null, asyncValidator?: AsyncValidatorFn<FormControl<T>> | AsyncValidatorFn<FormControl<T>>[] | null);
    patchValue(value: T | null, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
    registerOnChange(fn: Function): void;
    registerOnDisabledChange(fn: (isDisabled: boolean) => void): void;
    reset(formState?: FormControlState<T>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setAsyncValidators(newValidator: AsyncValidatorFn<FormControl<T>> | AsyncValidatorFn<FormControl<T>>[] | null): void;
    setValidators(newValidator: ValidatorFn<FormControl<T>> | ValidatorFn<FormControl<T>>[] | null): void;
    setValue(value: T | null, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
}

export declare class FormControlDirective extends NgControl implements OnChanges, OnDestroy {
    get control(): FormControl;
    form: FormControl;
    set isDisabled(isDisabled: boolean);
    /** @deprecated */ model: any;
    get path(): string[];
    /** @deprecated */ update: EventEmitter<any>;
    viewModel: any;
    constructor(validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[], valueAccessors: ControlValueAccessor[], _ngModelWarningConfig: string | null);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
}

export declare class FormControlName extends NgControl implements OnChanges, OnDestroy {
    readonly control: FormControl;
    get formDirective(): any;
    set isDisabled(isDisabled: boolean);
    /** @deprecated */ model: any;
    name: string | number | null;
    get path(): string[];
    /** @deprecated */ update: EventEmitter<any>;
    constructor(parent: ControlContainer, validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[], valueAccessors: ControlValueAccessor[], _ngModelWarningConfig: string | null);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
}

export declare class FormGroup<T extends AbstractControl = any> extends AbstractControl {
    get asyncValidator(): AsyncValidatorFn<FormGroup<T>> | null;
    set asyncValidator(asyncValidatorFn: AsyncValidatorFn<FormGroup<T>> | null);
    controls: {
        [key: string]: T;
    };
    get validator(): ValidatorFn<FormGroup<T>> | null;
    set validator(validatorFn: ValidatorFn<FormGroup<T>> | null);
    readonly value: {
        [key: string]: ValueType<T>;
    };
    readonly valueChanges: Observable<{
        [key: string]: ValueType<T>;
    }>;
    constructor(controls: {
        [key: string]: T;
    }, validatorOrOpts?: ValidatorFn<FormGroup<T>> | ValidatorFn<FormGroup<T>>[] | AbstractControlOptions<FormGroup<T>> | null, asyncValidator?: AsyncValidatorFn<FormGroup<T>> | AsyncValidatorFn<FormGroup<T>>[] | null);
    addControl(name: string, control: T): void;
    contains(controlName: string): boolean;
    getRawValue(): {
        [key: string]: ValueType<T>;
    };
    patchValue(value: {
        [key: string]: StateType<T>;
    }, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    registerControl(name: string, control: T): T;
    removeControl(name: string): void;
    reset(value?: {
        [key: string]: StateType<T>;
    }, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setAsyncValidators(newValidator: AsyncValidatorFn<FormGroup<T>> | AsyncValidatorFn<FormGroup<T>>[] | null): void;
    setControl(name: string, control: T): void;
    setValidators(newValidator: ValidatorFn<FormGroup<T>> | ValidatorFn<FormGroup<T>>[] | null): void;
    setValue(value: {
        [key: string]: StateType<T>;
    }, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare class FormGroupDirective extends ControlContainer implements Form, OnChanges, OnDestroy {
    get control(): FormGroup;
    directives: FormControlName[];
    form: FormGroup;
    get formDirective(): Form;
    ngSubmit: EventEmitter<any>;
    get path(): string[];
    readonly submitted: boolean;
    constructor(validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[]);
    addControl(dir: FormControlName): FormControl;
    addFormArray(dir: FormArrayName): void;
    addFormGroup(dir: FormGroupName): void;
    getControl(dir: FormControlName): FormControl;
    getFormArray(dir: FormArrayName): FormArray;
    getFormGroup(dir: FormGroupName): FormGroup;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onReset(): void;
    onSubmit($event: Event): boolean;
    removeControl(dir: FormControlName): void;
    removeFormArray(dir: FormArrayName): void;
    removeFormGroup(dir: FormGroupName): void;
    resetForm(value?: any): void;
    updateModel(dir: FormControlName, value: any): void;
}

export declare class FormGroupName extends AbstractFormGroupDirective implements OnInit, OnDestroy {
    name: string | number | null;
    constructor(parent: ControlContainer, validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[]);
}

export declare class FormSection<T extends {
    [K in keyof T]: AbstractControl;
} = any> extends AbstractControl {
    get asyncValidator(): AsyncValidatorFn<FormSection<T>> | null;
    set asyncValidator(asyncValidatorFn: AsyncValidatorFn<FormSection<T>> | null);
    controls: T;
    get validator(): ValidatorFn<FormSection<T>> | null;
    set validator(validatorFn: ValidatorFn<FormSection<T>> | null);
    readonly value: ValueType<T>;
    readonly valueChanges: Observable<ValueType<T>>;
    constructor(controls: T, validatorOrOpts?: ValidatorFn<FormSection<T>> | ValidatorFn<FormSection<T>>[] | AbstractControlOptions<FormSection<T>> | null, asyncValidator?: AsyncValidatorFn<FormSection<T>> | AsyncValidatorFn<FormSection<T>>[] | null);
    contains(controlName: keyof T): boolean;
    getRawValue(): ValueType<T>;
    patchValue(value: Partial<StateType<T>>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    reset(value?: StateType<T> | {}, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setAsyncValidators(newValidator: AsyncValidatorFn<FormSection<T>> | AsyncValidatorFn<FormSection<T>>[] | null): void;
    setControl<K extends keyof T>(name: K, control: T[K]): void;
    setValidators(newValidator: ValidatorFn<FormSection<T>> | ValidatorFn<FormSection<T>>[] | null): void;
    setValue(value: StateType<T>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare class FormsModule {
}

export declare class MaxLengthValidator implements Validator, OnChanges {
    maxlength: string | number;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class MaxValidator extends AbstractValidatorDirective implements OnChanges {
    max: string | number;
    ngOnChanges(changes: SimpleChanges): void;
}

export declare class MinLengthValidator implements Validator, OnChanges {
    minlength: string | number;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class MinValidator extends AbstractValidatorDirective implements OnChanges {
    min: string | number;
    ngOnChanges(changes: SimpleChanges): void;
}

export declare const NG_ASYNC_VALIDATORS: InjectionToken<(Function | Validator<any>)[]>;

export declare const NG_VALIDATORS: InjectionToken<(Function | Validator<any>)[]>;

export declare const NG_VALUE_ACCESSOR: InjectionToken<readonly ControlValueAccessor[]>;

export declare abstract class NgControl extends AbstractControlDirective {
    name: string | number | null;
    valueAccessor: ControlValueAccessor | null;
    abstract viewToModelUpdate(newValue: any): void;
}

export declare class NgControlStatus extends ɵangular_packages_forms_forms_g {
    constructor(cd: NgControl);
}

export declare class NgControlStatusGroup extends ɵangular_packages_forms_forms_g {
    constructor(cd: ControlContainer);
}

export declare class NgForm extends ControlContainer implements Form, AfterViewInit {
    get control(): FormGroup;
    get controls(): {
        [key: string]: AbstractControl;
    };
    form: FormGroup;
    get formDirective(): Form;
    ngSubmit: EventEmitter<any>;
    options: {
        updateOn?: FormHooks;
    };
    get path(): string[];
    readonly submitted: boolean;
    constructor(validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[]);
    addControl(dir: NgModel): void;
    addFormGroup(dir: NgModelGroup): void;
    getControl(dir: NgModel): FormControl;
    getFormGroup(dir: NgModelGroup): FormGroup;
    ngAfterViewInit(): void;
    onReset(): void;
    onSubmit($event: Event): boolean;
    removeControl(dir: NgModel): void;
    removeFormGroup(dir: NgModelGroup): void;
    resetForm(value?: any): void;
    setValue(value: {
        [key: string]: any;
    }): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare class NgModel extends NgControl implements OnChanges, OnDestroy {
    readonly control: FormControl;
    get formDirective(): any;
    isDisabled: boolean;
    model: any;
    name: string;
    options: {
        name?: string;
        standalone?: boolean;
        updateOn?: FormHooks;
    };
    get path(): string[];
    update: EventEmitter<any>;
    viewModel: any;
    constructor(parent: ControlContainer, validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[], valueAccessors: ControlValueAccessor[]);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
    static ngAcceptInputType_isDisabled: boolean | string;
}

export declare class NgModelGroup extends AbstractFormGroupDirective implements OnInit, OnDestroy {
    name: string;
    constructor(parent: ControlContainer, validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[]);
}

export declare class NgSelectOption implements OnDestroy {
    id: string;
    set ngValue(value: any);
    set value(value: any);
    constructor(_element: ElementRef, _renderer: Renderer2, _select: SelectControlValueAccessor);
    ngOnDestroy(): void;
}

export declare class NumberValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (_: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: number): void;
}

export declare class PatternValidator implements Validator, OnChanges {
    pattern: string | RegExp;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class RadioControlValueAccessor implements ControlValueAccessor, OnDestroy, OnInit {
    formControlName: string;
    name: string;
    onChange: () => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _registry: ɵangular_packages_forms_forms_n, _injector: Injector);
    fireUncheck(value: any): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class RangeValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (_: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class ReactiveFormsModule {
    static withConfig(opts: { warnOnNgModelWithFormControl: 'never' | 'once' | 'always';
    }): ModuleWithProviders<ReactiveFormsModule>;
}

export declare class RequiredValidator implements Validator {
    get required(): boolean | string;
    set required(value: boolean | string);
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class SelectControlValueAccessor implements ControlValueAccessor {
    set compareWith(fn: (o1: any, o2: any) => boolean);
    onChange: (_: any) => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class SelectMultipleControlValueAccessor implements ControlValueAccessor {
    set compareWith(fn: (o1: any, o2: any) => boolean);
    onChange: (_: any) => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare type ValidationErrors = {
    [key: string]: any;
};

export declare interface Validator<T extends AbstractControl = any> {
    registerOnValidatorChange?(fn: () => void): void;
    validate(control: T): ValidationErrors | null;
}

export declare interface ValidatorFn<T extends AbstractControl = any> {
    (control: T): ValidationErrors | null;
}

export declare class Validators {
    static compose<T extends AbstractControl>(validators: null): null;
    static compose<T extends AbstractControl>(validators: (ValidatorFn<T> | null | undefined)[]): ValidatorFn<T> | null;
    static composeAsync<T extends AbstractControl>(validators: (AsyncValidatorFn<T> | null)[]): AsyncValidatorFn<T> | null;
    static email(control: FormControl<string>): ValidationErrors | null;
    static max(max: number): ValidatorFn<FormControl<number> | FormControl<string> | FormControl<number | string>>;
    static maxLength(maxLength: number): ValidatorFn<FormControl<string> | FormControl<any[]> | FormArray<any>>;
    static min(min: number): ValidatorFn<FormControl<number> | FormControl<string> | FormControl<number | string>>;
    static minLength(minLength: number): ValidatorFn<FormControl<string> | FormControl<any[]> | FormArray<any>>;
    static nullValidator(control: AbstractControl): ValidationErrors | null;
    static pattern(pattern: string | RegExp): ValidatorFn<FormControl<string>>;
    static required(control: AbstractControl): ValidationErrors | null;
    static requiredTrue(control: FormControl<boolean>): ValidationErrors | null;
}

export declare const VERSION: Version;
