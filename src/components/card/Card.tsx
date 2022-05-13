import React, { HtmlHTMLAttributes } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  varient: "unselected" | "hover" | "selected"
  imgSrc?: string
  isChecked?: boolean
  checkboxText?: string
}
const CardTest = (props: CardProps) => {
  const { varient = "unselected", imgSrc = "https://picsum.photos/200/100", isChecked = undefined, checkboxText = "Flood Zone" } = props
  return (
    <div>
      <Card sx={{ maxWidth: 230 }} style={{ boxShadow: varient !== "unselected" ? "0px 0px 0px 2px #65E9D9" : "none" }}>
        <CardActionArea>
          <CardMedia component="img" height="100" image={imgSrc} alt="green iguana" />
          <CardContent style={{ padding: "10px 20px", border: varient === "selected" ? "1px solid #616161" : "1px solid transparent" }}>
            <FormControlLabel
              control={<Checkbox name="gilad" style={{ color: varient === "selected" ? "#21B6A8" : "#616161" }} checked={isChecked && true} />}
              label={varient}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default CardTest
