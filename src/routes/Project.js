import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "contents/project1.png";
import project2 from "contents/project2.png";

const styles = theme => ({
    card: {
        position: "relative",
        display: "inline-block",
        width: "97%",
        marginTop: "1.5rem"
    },
    media: {
        // ⚠️ object-fit is not supported by IE11.
        objectFit: "cover",
        width: "100%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    mediaContainer: {
        float: "left",
        width: "20%",
        [theme.breakpoints.down("xs")]: {
            width: "100% !important" // Overrides inline-style
        }
    },
    contentContainer: {
        float: "left",
        width: "80%",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            width: "100% !important" // Overrides inline-style
        }
    },
    detailPosition: {
        position: "absolute",
        bottom: "0px"
    },
    cardOuterWrap: {
        width: "100%",
        height: "100%"
    },
    cardInnerWrap: {
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            paddingBottom: "16%"
        }
    }
});

const dataSet = [
    {
        img: project1,
        title:
            "안드로이드와 아두이노를 이용한 블루투스 통신 위치 추적기 프로젝트",
        description:
            "대게 아이들의 특성상 보호자의 시야에서 벗어나 잃어버리거나 실종 또는 유괴를 당하는 경우가 많습니다. 이 제품은 그것을 방지하기 위해 구상하게 되었습니다. 전체적인 활용으론 유치원, 보육원 등 아이들이 모여있는 장소에서 활용하기 좋은 제품입니다. 보호자가 지정해 놓은 범위 밖으로 아이들이 나갈경우 보호자의 핸드폰은 경고 및 이탈한 아이의 정보, 후속 조치까지 가능하도록 되어있어 여러방면으로 활용이 가능합니다.",
        url: "http://junprogramer.tistory.com/26"
    },
    {
        img: project2,
        title: "콘솔에서 GUI를 사용해 C/C++ 사전 제작 프로젝트",
        description:
            "이 프로젝트는 호서대학교 컴퓨터 공학과 알고리즘 분석과 설계에서 개인 프로젝트로 진행된 프로젝트입니다. 콘솔에서 GUI를 이용해 UI적으로 신경을 썻으며, 멀티 스레딩을 통해 퀴즈 기능을 작업하였습니다. 또한 시스템 명령어를 통해 기존에 작성되어진 샘플 프로그램을 실핼할 수 있고, 참고할 수 있는 사이트를 정리해 놓았습니다.",
        url: "http://junprogramer.tistory.com/78"
    }
];

function ComplexGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.cardOuterWrap}>
            <div className={classes.cardInnerWrap}>
                {dataSet.map(data => (
                    <Card id="test" className={classes.card}>
                        <div className={classes.mediaContainer}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image={data.img}
                                title="Contemplative Reptile"
                            />
                        </div>
                        <div className={classes.contentContainer}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="headline"
                                    component="h2"
                                >
                                    {data.title}
                                </Typography>
                                <Typography component="p" align="left">
                                    {data.description}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    href={data.url}
                                    target="_blank"
                                    className={classes.detailPosition}
                                >
                                    자세히 보기
                                </Button>
                            </CardActions>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComplexGrid);
