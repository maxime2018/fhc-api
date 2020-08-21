/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { InvoiceItem } from "./InvoiceItem"
import { Patient } from "./Patient"

export class Invoice {
  constructor(json: JSON | any) {
    Object.assign(this as Invoice, json)
  }

  creditNote?: boolean
  gnotionNihii?: string
  hospitalisedPatient?: boolean
  ignorePrescriptionDate?: boolean
  internshipNihii?: string
  invoiceNumber?: number
  invoiceRef?: string
  ioCode?: string
  items?: Array<InvoiceItem>
  patient?: Patient
  reason?: Invoice.ReasonEnum
  relatedBatchSendNumber?: number
  relatedBatchYearMonth?: number
  relatedInvoiceIoCode?: string
  relatedInvoiceNumber?: number
  startOfCoveragePeriod?: number
}
export namespace Invoice {
  export type ReasonEnum =
    | "Chimiotherapy"
    | "ProfessionalDisease"
    | "WorkAccident"
    | "Accident"
    | "Other"
  export const ReasonEnum = {
    Chimiotherapy: "Chimiotherapy" as ReasonEnum,
    ProfessionalDisease: "ProfessionalDisease" as ReasonEnum,
    WorkAccident: "WorkAccident" as ReasonEnum,
    Accident: "Accident" as ReasonEnum,
    Other: "Other" as ReasonEnum
  }
}